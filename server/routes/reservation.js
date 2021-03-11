const { json } = require('express');
const express = require('express');
const router = express.Router();

//reservation Model
const Reservation = require('../models/Reservation')
//@router GET /Reservations
//@Desc get all reservations
router.get('/',(req,res)=>{
    Reservation.find()
    .then(reservations=>res.json(reservations))
})
//@router POST /Reservations
//@Desc add a reservation
router.post('/',(req,res)=>{
    const newReservation = new Reservation({
        userName: req.body.userName,
        time:req.body.time,
        price:req.body.price,
    });
    newReservation.save()
    .then(reservations=>res.json(reservations))
    
})
//@router DELETE /Reservations
//@Desc delete a reservation
router.delete('/:id',(req,res)=>{
    Reservation.findById(req.params.id)
    .then(reservation=>reservation.remove()
    .then(()=>res.json("Successfully Deleted"))
    ).catch(err=>res.status(404).json("Failed to delete Reservation"))
})

//@router PUT /Reservations
//@Desc update a reservation
router.put("/:_id", (req, res) => {
    let { _id } = req.params;
    Reservation.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
      .then(() => res.send("Reservation has been updated"))
      .catch((err) => res.send(err));
  });












module.exports=router;