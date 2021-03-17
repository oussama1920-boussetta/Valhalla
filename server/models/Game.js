const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  title: String,
  description:String,
  price:Number,
  reservation:{type:mongoose.Schema.Types.ObjectId,ref:'reservation'}
});

module.exports = Game = mongoose.model('game', gameSchema);