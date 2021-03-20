const express = require("express");
const {
  registerReservation,
  fetchReservations,
  updateReservation,
  deleteReservation,
  validateReservation
} = require("../controllers/reservation.controller");
const { validator, addResevationRules } = require("../middleware/validator");
const router = express.Router();

router.post('/',addResevationRules(),validator,registerReservation)
router.get('/',fetchReservations)
router.put('/:_id',updateReservation)
router.delete('/:_id',deleteReservation)
router.patch('/:_id',validateReservation)
//reservation Model
// const Reservation = require('../models/Reservation')
// //@router GET /Reservations
// //@Desc get all reservations
// router.get('/',(req,res)=>{
//     Reservation.find()
//     .populate('gamesList')
//     .exec()
//     .then(reservations=>res.json(reservations)
//     )
// })

// //@router POST /Reservations
// //@Desc add a reservation
// router.post('/',async (req,res)=>{
//     try{
//         const newReservation = new Reservation({
//         userName: req.body.userName,
//         date:req.body.date,
//         price:req.body.price,
//         status:req.body.status,
//     });
//     newReservation.save()
//     res.status(201).json({success:true,message:"Reservation created successfully",data:newReservation})
// }catch(err){    res.status(400).json({success: false, message:err.message});}
// });

// //@router DELETE /Reservations
// //@Desc delete a reservation
// router.delete('/:_id',(req,res)=>{
//     Reservation.findById(req.params._id)
//     .then(reservation=>reservation.remove()
//     .then(()=>res.json("Successfully Deleted"))
//     ).catch(err=>res.status(404).json("Failed to delete Reservation"))
// })

// //@router PUT /Reservations
// //@Desc update a reservation
// router.put("/:_id", (req, res) => {
//     let { _id } = req.params;
//     Reservation.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
//       .then(() => res.send("Reservation has been updated"))
//       .catch((err) => res.send(err));
//   });

// //@router PUT /Reservations
// //@Desc validate a reservation
// router.patch("/:_id", (req, res) => {
//     let { _id } = req.params;
//     Reservation.findByIdAndUpdate({ _id }, { $set: { status:"Approved" } })
//       .then(() => res.send("Reservation has been validated"))
//       .catch((err) => res.send(err));
//   });

module.exports = router;
