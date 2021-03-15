const mongoose = require("mongoose");

const vrgameSchema = mongoose.Schema({
  title: String,
  descripion:String,
  gameImage:Image
});

module.exports = Vrgame = mongoose.model("vrgame", vrgameSchema);