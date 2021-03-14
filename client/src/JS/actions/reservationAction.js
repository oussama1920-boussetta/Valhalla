import {GET_RESERVATIONS, RESERVATIONS_LOADING, ADD_RESERVATION} from '../constants/actionsTypes'
import  axios  from 'axios';

export const getReservations =()=>(dispatch)=>{
        axios
        .get("/reservations")
        .then((res)=>dispatch({type: GET_RESERVATIONS, payload :res.data}))
        .catch((err) => console.log(err));
    
}

export const addReservation =(reservation)=>(dispatch)=>{
        axios
        .post('/reservations', reservation)
        .then((res)=>dispatch({
                type:ADD_RESERVATION,
                payload:res.data
        }))

}

export const setReservationsLoading=()=>{
        return{
                type:RESERVATIONS_LOADING
        }
}