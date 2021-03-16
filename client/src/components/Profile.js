import { stringify } from "querystring";
import React from "react";
import { useSelector } from "react-redux";
import GamesList from "./GamesList";
import ReservationsTable from './ReservationsTable';
import ReservationModal from './ReservationModal';
import TeteProfil from './TeteProfil'

const Profile = () => {
  return (
    <div>
     <TeteProfil/>
      <GamesList/>
    
      <ReservationsTable/>
     
      <ReservationModal/>
    </div>
  );
};

export default Profile;