import React from "react";
import { getGames } from "../JS/actions/gameAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import theSecret from "../components/images/thesecret.jpg";
import deadandBuried from "../components/images/Dead&Buried.jpg";
import angryBirds from "../components/images/angrybirds.jpg";
import beatSaber from "../components/images/beastSaber.jpg";
import { Card } from "react-bootstrap";

const imagesArr = [theSecret, deadandBuried, angryBirds, beatSaber];
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
    <div className="games">
      {games.map((game, index) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img src={imagesArr[index]} alt="titre" />
          <Card.Body>
            <h1>{game.title}</h1>
            <h4>{game.description}</h4>
            <h5 style={{
              color:"red",
              paddingTop:"20px"
              }}>Price :{game.price}</h5>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default GamesList;
