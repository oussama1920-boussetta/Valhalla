const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  title: String,
  description:String,
  price:Number
});

module.exports = Game = mongoose.model("game", gameSchema);