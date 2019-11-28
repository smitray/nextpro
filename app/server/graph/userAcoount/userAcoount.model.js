import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import timestamp from 'mongoose-timestamp';

const userAcoountSchema = new mongoose.Schema({
  
});

userAcoountSchema.plugin(uniqueValidator);
userAcoountSchema.plugin(timestamp);

const userAcoountModel = mongoose.model('userAcoountModel', userAcoountSchema);

export default userAcoountModel;
