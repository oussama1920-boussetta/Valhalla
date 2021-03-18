import React from 'react'
import AdminNav from './AdminNav';
import ReservationsTable from '../ReservationsTable';
import Allreservations from './Allreservations';
const Adminpage = () => {

    return (
        <div>
            <AdminNav/>
            <Allreservations/>
        </div>
    )
}

export default Adminpage
