const mongoose = require("mongoose");

const vrgameSchema = mongoose.Schema({
  title: String,
  description: String,
  
  image: String,
 
});

module.exports = vrgame = mongoose.model("vrgame", vrgameSchema);