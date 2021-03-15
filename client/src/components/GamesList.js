import React from 'react'
import { getGames } from '../JS/actions/gameAction';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const GamesList = () => {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.gameReducer.games);
    const getAllGames = () => {
      dispatch(getGames());
    };
    useEffect(() => {
        getAllGames();
      }, []);
    return (
        <div>
            {games.map((game)=>(<ul>
                <li>{game.title}</li>
                <li>{game.description}</li>
                <li>{game.price}</li>
            </ul>  ))}
        </div>
    )
}

export default GamesList
