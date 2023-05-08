/** @format */

import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Email is requireds'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      'Username invalid, it should contain 8-20 alphanumeric letters and be unique!',
    ],
  },
  image: {
    type: String,
  },
});

//we make use of models because in 'next' we only trigger and close server is not always running
//so if we have a user we dont want to create a user model again , models hold all our models
const User = models.User || model('User', UserSchema);

export default User;
