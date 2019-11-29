import { Crud } from 'util';
import reporter from 'core/logger';
import todoModel from './todo.model';

class TodoService extends Crud {
  // constructor(model) {
  //   super(model);
  // }

  async todoToggle({ _id }) {
    try {
      const todo = await this.single({
        qr: {
          _id
        }
      });
      const update = await this.put({
        params: {
          qr: {
            _id
          }
        },
        body: {
          done: !todo.done
        }
      });
      return update;
    } catch (err) {
      reporter.error('Todo delete failed', err);
      throw new Error(err);
    }
  }
}

const todoCrud = new TodoService(todoModel);

export default todoCrud;
