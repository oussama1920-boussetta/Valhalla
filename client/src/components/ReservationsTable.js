import React from 'react'
import { getReservations } from '../JS/actions/reservationAction';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
        <div>
           {reservations.map((reservation,index)=>( 
           <ul>
                <li>{reservation.userName}</li>
                <li>{reservation.date}</li>
                <li>{reservation.price}</li>
                <li>{reservation.status}</li>
            </ul>))}
        </div>
    )
}

export default ReservationsTable
