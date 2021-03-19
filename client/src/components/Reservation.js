import React from "react";
import { useDispatch } from 'react-redux';
import { deleteReservation } from "../JS/actions/reservationAction";

const Reservation = ({ reservation, setcurrentId }) => {
    const dispatch = useDispatch();
  return (
      <tr>
        <td> {reservation.userName}</td>
        <td> {reservation.date}</td>
        <td> {reservation.price}</td>
        <td> {reservation.status}</td>
        <td>
          <button onClick={()=>
            setcurrentId(reservation._id)
            } className="btnEdit">Edit</button>
        </td>
        <td>
          <button onClick={()=>
                dispatch(deleteReservation(reservation._id))
            } className="btnRemove">Delete</button>
        </td>
      </tr>
  );
};

export default Reservation;
