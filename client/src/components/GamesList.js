import React from 'react'
import { getGames } from '../JS/actions/gameAction';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import theSecret from '../components/images/thesecret.jpg'
import deadandBuried from '../components/images/Dead&Buried.jpg'
import angryBirds from '../components/images/angrybirds.jpg'
import beatSaber from '../components/images/beastSaber.jpg'

const imagesArr= [theSecret,deadandBuried,angryBirds,beatSaber]
console.log(imagesArr)
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
            {games.map((game,index)=>(<ul>
                <li>{game.title}</li>
                <img width='300' src={imagesArr[index]}/>
                <li>{game.description}</li>
                <li>{game.price}</li>
            </ul>  ))}
        </div>
    )
}

export default GamesList
