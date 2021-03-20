import React from "react";
import { getReservations,validateReservation } from "../../JS/actions/reservationAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./admin.css";




const Allreservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservationReducer.reservations);
  const [currentId, setcurrentId] = useState(null)

  const getAllReservations = () => {
    dispatch(getReservations());
  };

  useEffect(() => {
    getAllReservations();
  }, []);

  return (
    <div>
        <h2>Reservations :</h2>
      <div className="Table">
        <table>
          <thead>
            <tr>
              <th>User Name </th>
              <th>Date</th>
              <th>price</th>
              <th>Status of reservation</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr>
                <td> {reservation.userName}</td>
        <td> {reservation.date}</td>
        <td> {reservation.price}</td>
        <td> {reservation.status}</td>
        <td><button onClick={()=>{
           dispatch(validateReservation(reservation._id) )
                                  console.log(reservation._id)
                }
               
            } className="btnRemove">Validate</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  );
};

export default Allreservations;
