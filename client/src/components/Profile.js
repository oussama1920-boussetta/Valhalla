import { stringify } from "querystring";
import React, {useState} from "react";
import GamesList from "./GamesList";
import ReservationsTable from './ReservationsTable';
import ReservationModal from './ReservationModal';
import TeteProfil from './TeteProfil'

const Profile = () => {
  const [currentId, setcurrentId] = useState(null)
  return (
    <div>
     <TeteProfil/>
      <GamesList/>
      <ReservationsTable setcurrentId={setcurrentId}/>
      <ReservationModal currentId={currentId} setcurrentId={setcurrentId} />
    </div>
  );
};

export default Profile;