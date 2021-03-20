import { stringify } from "querystring";
import React, {useState} from "react";
import GamesList from "./GamesList";
import ReservationsTable from './ReservationsTable';
import ReservationForm from './ReservationForm';
import TeteProfil from './TeteProfil'

const Profile = () => {
  const [currentId, setcurrentId] = useState(null)
  return (
    <div>
     <TeteProfil/>
      <GamesList/>
      <ReservationsTable setcurrentId={setcurrentId}/>
      <ReservationForm currentId={currentId} setcurrentId={setcurrentId} />
    </div>
  );
};

export default Profile;