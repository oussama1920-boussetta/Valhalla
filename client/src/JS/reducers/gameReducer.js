import {GET_GAMES, GAMES_LOADING} from '../constants/actionsTypes';

const initialState={
    games : [],
    loading:false
};

const gameReducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_GAMES : 
        return {
            ...state,
            games:action.payload,
            loading:false
        };
        case GAMES_LOADING :
            return {
                ...state,
                loading:true
            }
            default: return state;
    }
};





        export default gameReducer;