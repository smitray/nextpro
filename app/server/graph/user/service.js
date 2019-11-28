import { Crud } from 'util';
import userModel from './model';

class UserService extends Crud {
  // constructor(model) {
  //   super(model);

  // }
}

const userCrud = new UserService(userModel);

export default userCrud;
