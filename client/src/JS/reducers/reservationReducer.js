import {GET_RESERVATIONS,
     RESERVATIONS_LOADING,
     ADD_RESERVATION, 
     DELETE_RESERVATION,
     UPDATE_RESERVATION,
    } from '../constants/actionsTypes'

const initialState={
    reservations : [],
    loading:false,
};

const reservationReducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_RESERVATIONS : 
        return {
            ...state,
            reservations:action.payload,
            loading:false
        };
        case ADD_RESERVATION : 
        return {
            ...state,
            reservations:[action.payload,...state.reservations],
        };
        case DELETE_RESERVATION : 
        return {
            ...state,
            reservations:state.reservations.filter(reservation=>reservation._id !== action.payload),
        };
        case RESERVATIONS_LOADING :
        return {
            ...state,
            loading:true
        };
        case UPDATE_RESERVATION : 
        return {
            ...state,
            reservations:state.reservations.map(reservation=>reservation._id===action.payload._id)
        }
        default: return state;
    }

}

export default reservationReducer;