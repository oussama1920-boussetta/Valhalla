import React from "react";
import { useDispatch } from 'react-redux';
import { deleteReservation } from "../JS/actions/reservationAction";
import ReservationForm from "./ReservationForm";

const Reservation = ({ reservation, setcurrentId, currentId }) => {
    const dispatch = useDispatch();
  return (
      <tr>
        <td> {reservation.userName}</td>
        <td> {reservation.date}</td>
        <td> {reservation.price}</td>
        <td> {reservation.status}</td>
        <td>
          <button onClick={()=>
         { 
           setcurrentId(reservation._id);
         <ReservationForm currentId={currentId} />
          }
            } className="btnEdit"
            >Edit
            </button>
        </td>
        <td>
          <button onClick={()=>{ dispatch(deleteReservation(reservation._id) )
                                  console.log(reservation._id)
                }
               
            } className="btnRemove">Delete</button>
        </td>
      </tr>
  );
};

export default Reservation;
