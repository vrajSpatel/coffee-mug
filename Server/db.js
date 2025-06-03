const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;
console.log(process.env.MONGODB_URI);
const connecttoMongo = async () => {
  await mongoose.connect(MONGODB_URI);
  console.log("mongo-connected");
};

module.exports = connecttoMongo;
