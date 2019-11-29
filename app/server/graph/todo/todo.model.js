import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import timestamp from 'mongoose-timestamp';

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    unique: true,
    default: null
  },
  done: {
    type: Boolean,
    default: false
  }
});

todoSchema.plugin(uniqueValidator);
todoSchema.plugin(timestamp);

const todoModel = mongoose.model('todoModel', todoSchema);

export default todoModel;
