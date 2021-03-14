import React from 'react'

const ReservationsTable = (reservation) => {
    console.log(reservation)
    return (
        <div>
            <ul>
                <li>{reservation.price}</li>
                <li>{reservation.userName}</li>
                <li>{reservation.date}</li>
                <li>{reservation.time}</li>
            </ul>
        </div>
    )
}

export default ReservationsTable
