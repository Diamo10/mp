import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fname: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  lname: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    maxlength: 50,
    unique: true,
    trim: true,
  },
  pNumber: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  DOB: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
  },
  occupation: {
    type: String,
    required: true,
    maxlength: 50,
    unique: true,
    trim: true,
  },
  position: {
    type: String,
    maxlength: 50,
    unique: true,
    trim: true,
  },
  company: {
    type: String,
    maxlength: 50,
    unique: true,
    trim: true,
  },
  profilePic: {
    type: String,
    required: true,
    maxlength: 50,
    unique: true,
    trim: true,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
