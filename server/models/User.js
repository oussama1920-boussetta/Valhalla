const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: Number,
  password: String,
  role:String
});

module.exports = User = mongoose.model("user", userSchema);