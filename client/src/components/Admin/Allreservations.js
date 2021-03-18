import React from "react";
import { getReservations,deleteReservation } from "../../JS/actions/reservationAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./admin.css";
import ReservationsTable from "../ReservationsTable";
import ReservationModal from './../ReservationModal';



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
    <ReservationsTable setcurrentId={setcurrentId}/>  
    <ReservationModal currentId={currentId} setcurrentId={setcurrentId} />
    </div>
  );
};

export default Allreservations;
