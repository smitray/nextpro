import { sign } from 'jsonwebtoken';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { userService } from 'graph/user';
import { SERVER_SECRET } from 'cfg';
import { Crud } from 'util';
import { accountModel } from './index';

const secret = SERVER_SECRET.split(',');

const generateJwt = (data) => new Promise((resolve, reject) => {
  sign(data, secret[0], {
    expiresIn: '6h'
  }, (err, token) => {
    if (err) {
      reject(err);
    }
    resolve(token);
  });
});

class AccountService extends Crud {
  constructor(model) {
    super(model);
    this.userCrud = userService;
  }

  async createAccount({
    firstName,
    lastName,
    username,
    email,
    password,
    accType
  }) {
    try {
      const salt = genSaltSync();
      const hash = hashSync(password, salt);
      const account = await this.create({
        username,
        email,
        password: hash,
        accType
      });
      const user = await this.userCrud.create({
        firstName,
        lastName,
        accountId: account._id
      });
      account.token = await generateJwt({
        authId: account._id,
        userId: user._id,
        accType
      });
      return account;
    } catch (err) {
      throw new Error(err);
    }
  }

  async login({
    username,
    password
  }) {
    try {
      const account = await this.single({
        qr: {
          $or: [{
            username
          }, {
            email: username
          }]
        }
      });
      if (!account) {
        throw new Error('No user found');
      } else if (account && !compareSync(password, account.password)) {
        throw new Error('Wrong credentials');
      }
      const user = await userService.single({
        qr: {
          accountId: account._id
        }
      });
      account.token = await generateJwt({
        authId: account._id,
        userId: user._id,
        accType: account.accType
      });
      return account;
    } catch (err) {
      throw new Error(err);
    }
  }
}

const accountCrud = new AccountService(accountModel);

export default accountCrud;
