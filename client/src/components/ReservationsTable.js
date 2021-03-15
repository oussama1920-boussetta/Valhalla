import React from 'react'

const ReservationsTable = ({reservation}) => {
    console.log(reservation)
    return (
        <div>
            <ul>
                <li>{reservation.userName}</li>
                <li>{reservation.date}</li>
                <li>{reservation.time}</li>
                <li>{reservation.price}</li>
                <li>{reservation.status}</li>
            </ul>
        </div>
    )
}

export default ReservationsTable
