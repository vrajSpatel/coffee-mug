const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true, //to make it unique
  },
  //workon
  profileImage: {
    type: String,
  },
  description: {
    type: String,
  },
  mobile: {
    type: String,
  },
  roles: {
    type: [String],
    required: true,
  },
  industries: {
    type: [String],
    required: true,
  },
  //goals
  objectives: {
    type: [String],
    required: true,
  },
  designation: {
    type: String,
  },
  company: {
    type: String,
  },
  city: {
    type: String,
  },
  seniority: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("userdata", UserSchema);
// User.createIndexes(); // create a new index in mongodb
module.exports = User;
