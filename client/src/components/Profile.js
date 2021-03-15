import { stringify } from "querystring";
import React from "react";
import { useSelector } from "react-redux";
import GamesList from "./GamesList";
import ReservationsTable from './ReservationsTable';
import ReservationModal from './ReservationModal';


const Profile = () => {
  return (
    <div>
      <GamesList/>
      <h2>Reservations :</h2>
      <ReservationsTable/>
      <ReservationModal/>
    </div>
  );
};

export default Profile;