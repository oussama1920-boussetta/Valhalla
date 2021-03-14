import {GET_RESERVATIONS} from '../constants/actionsTypes'
import  axios  from 'axios';

export const getReservations =()=>(dispatch)=>{
        axios
        .get("/reservations")
        .then((res)=>dispatch({type: GET_RESERVATIONS, payload :res.data}))
        .catch((err) => console.log(err));
}