import Crud from 'util/Crud';
import { userModel } from './index';

class UserService extends Crud {
  // constructor(model) {
  //   super(model);

  // }
}

const userCrud = new UserService(userModel);

export default userCrud;
