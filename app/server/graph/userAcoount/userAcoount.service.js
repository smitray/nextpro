import { Crud } from 'util';
import userAcoountModel from './userAcoount.model';

class UserAcoountService extends Crud {
  // constructor(model) {
  //   super(model);

  // }
}

const userAcoountCrud = new UserAcoountService(userAcoountModel);

export default userAcoountCrud;
