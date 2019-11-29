// import { AuthenticationError } from 'apollo-server-koa';
import reporter from 'core/logger';
import todoService from './todo.service';

const todoResolvers = {
  Query: {
    todos: async () => {
      try {
        const todos = await todoService.get();
        return todos;
      } catch (err) {
        reporter.error('Todos fetch failed', err);
        throw new Error(err);
      }
    },
    todo: async (root, { _id }) => {
      try {
        const todo = await todoService.single({
          qr: {
            _id
          }
        });
        return todo;
      } catch (err) {
        reporter.error('Todo fetch failed', err);
        throw new Error(err);
      }
    }
  },
  Mutation: {
    todoCreate: async (root, { content }) => {
      try {
        const newTodo = await todoService.create({
          content
        });
        return newTodo;
      } catch (err) {
        reporter.error('Todo create failed', err);
        throw new Error(err);
      }
    },
    todoUpdate: async (root, { _id, content }) => {
      try {
        const updatedTodo = await todoService.put({
          params: {
            qr: {
              _id
            }
          },
          body: {
            content
          }
        });
        return updatedTodo;
      } catch (err) {
        reporter.error('Todo update failed', err);
        throw new Error(err);
      }
    },
    todoDelete: async (root, { _id }) => {
      try {
        const deletedTodo = await todoService.delete({
          params: {
            qr: {
              _id
            }
          }
        });
        return deletedTodo;
      } catch (err) {
        reporter.error('Todo delete failed', err);
        throw new Error(err);
      }
    },
    todoToggle: (root, { _id }) => {
      const todo = todoService.todoToggle({ _id });
      return todo;
    }
  }
};

export default todoResolvers;
