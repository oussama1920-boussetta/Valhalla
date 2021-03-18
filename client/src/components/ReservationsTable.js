import React from "react";
import { getReservations } from "../JS/actions/reservationAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Reservation from "./Reservation";

const ReservationsTable = ({ setcurrentId }) => {
  const dispatch = useDispatch();
  const reservations = useSelector(
    (state) => state.reservationReducer.reservations
  );
  const getAllReservations = () => {
    dispatch(getReservations());
  };

  useEffect(() => {
    getAllReservations();
  }, []);

  return (
    <div className="reservationTable">
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
              <Reservation reservation={reservation} setcurrentId={setcurrentId} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationsTable;
