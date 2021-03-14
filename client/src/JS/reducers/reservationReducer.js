import {GET_RESERVATIONS} from '../constants/actionsTypes'

const initialState={
    reservations : []
};

const reservationReducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_RESERVATIONS : 
        return {...state,reservations:action.payload};

        default: return state;
    }

}

export default reservationReducer;