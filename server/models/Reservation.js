const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  userName: String,
  date: {
    type:Date,
    default:Date.now
  },
  time:Number,
  price: Number,
});

module.exports = Reservation = mongoose.model("reservation", reservationSchema);