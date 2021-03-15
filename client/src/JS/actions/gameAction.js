import {GET_GAMES, GAMES_LOADING} from '../constants/actionsTypes';
import  axios  from 'axios';

export const getGames =()=>(dispatch)=>{
    axios
    .get("/games")
    .then((res)=>dispatch({type: GET_GAMES, payload :res.data}))
    .catch((err) => console.log(err));
}

export const setGamesLoading=()=>{
    return{
            type:GAMES_LOADING
    }
}