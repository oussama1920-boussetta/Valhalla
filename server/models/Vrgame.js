const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  title: String,
  descripion:String,
  gameImage:Image
});

module.exports = Reservation = mongoose.model("reservation", reservationSchema);