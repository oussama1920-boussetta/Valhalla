const mongoose = require("mongoose");
const game= require('../models/Game')
const reservationSchema = mongoose.Schema({
  userName:String,
  date: {
    type:Date,
  },
  
  price: {
    type:Number
  },

  status:String,

  gamesList :[{
    type : mongoose.Schema.Types.ObjectId,
    ref:'game'
  }]

});


module.exports = Reservation = mongoose.model('reservation', reservationSchema);