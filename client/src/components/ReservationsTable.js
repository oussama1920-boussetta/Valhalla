import React from 'react'
import { getReservations } from '../JS/actions/reservationAction';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import valhalla from '../components/images/valhalla.png'
const ReservationsTable = () => {
    const dispatch = useDispatch();
    const reservations = useSelector((state) => state.reservationReducer.reservations);
    const getAllReservations = () => {
      dispatch(getReservations());
    };
  
    useEffect(() => {
      getAllReservations();
    }, []);
  
    return (
        <div className='reservationTable'>
         
         
           <h2>Reservations :</h2>
<div className='Table'>
<div>      <img src={valhalla} width= "350"/>
</div>


           <table>
           {reservations.map((reservation,index)=>( 
          <div>
           
           <tr>
    <th>User Name </th>
    <th>Date</th>
    <th>Time</th>
    <th>price</th>
    <th>Status of reservation</th>
  </tr>
  <tr>
  <h5>  <td> {reservation.userName}</td></h5>
    <td> {reservation.date}</td>
    <td> {reservation.time}</td>
    <td> {reservation.price}</td>
    <td> {reservation.status}</td>
    
  </tr>
               </div>
           ))}</table></div>
        </div>
    )
}

export default ReservationsTable




  
  
