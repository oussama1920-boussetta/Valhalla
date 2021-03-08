const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  gamename: String,
  resdate: date,
  time: date,
  cost:Number,
});

module.exports = reservation = mongoose.model("reservation", reservationSchema);