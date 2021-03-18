const Reservation = require('../models/Reservation')
const mongoose = require('mongoose')
exports.registerReservation = async (req,res) =>{
    const { date, userName, price, status } = req.body;
    try {
        const newReservation = new Reservation({
            date,
            userName,
            price,
            status,
          });
          await newReservation.save();
          await res.status(201).json({ msg: `Reservation added successfully` });
    } catch (error) {
        console.error("Reservation register failed", error);
        res.status(401).json({ msg: `Reservation register Failed` });
    }
}

exports.fetchReservations = async (req,res)=>{
    try {
        const reservations = await Reservation.find()
        await res.status(200).json(reservations)
    } catch (error) {
        res.status(401).json({message:error.message})
    }

}

exports.updateReservation = async (req,res)=>{
        const {id : _id }= req.params;
        const reserve = req.body;
        if(mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No reservation has that Identifier')
      const updatedReservation= await Reservation.findOneAndUpdate(_id,reserve,{new :true})
      res.json(updatedReservation)
 
}

exports.deleteReservation = async (req,res)=>{
    const {id}= req.params;
    if(mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No reservation has that Identifier')
    await Reservation.findByIdAndRemove(id)
    res.json({message : 'Reservation deleted successfully'})
}