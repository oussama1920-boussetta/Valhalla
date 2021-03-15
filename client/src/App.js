import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./components/Profile";
import { getProfile } from "./JS/actions";
import PrivateRoute from "./components/PrivateRoute";
import Nav from "./components/Nav";
import { Button } from "bootstrap";
import { getReservations } from './JS/actions/reservationAction';
import { getGames } from './JS/actions/gameAction';
import ReservationsTable from './components/ReservationsTable';
import ReservationModal from './components/ReservationModal';
import GamesList from './components/GamesList';



const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  const reservations = useSelector((state) => state.reservationReducer.reservations);
  const getAllReservations = () => {
    dispatch(getReservations());
  };

  const games = useSelector((state) => state.gameReducer.games);
  const getAllGames = () => {
    dispatch(getGames());
  };

  useEffect(() => {
    getAllReservations();
  }, []);

  useEffect(() => {
    getAllGames();
  }, []);

  useEffect(() => {
    dispatch(getProfile());
  }, [isAuth]);

  return (
    <BrowserRouter>
    <div className="App">
      <ReservationModal/>
      <Link to ="/reservations_list">
        <button>Reservations</button>
      </Link>
      <Link to ="/games">
        <button>Games</button>
      </Link>
      <Switch>
        <Route exact path="/" render={(props) => <Nav {...props} />} />
        <Route exact path="/profile" component={Profile} render={(props) => <Profile {...props} />} />

         {/* Router for reservations */}
   <Route path="/reservations_list"
        render={()=>(<div className="reservationsList">
            {reservations.map((el,i)=>(<ReservationsTable reservation={el} key={i} />))}
        </div>)}
        />

                 {/* Router for games */}

   <Route path="/games"
        render={()=>(<div className="gamesList">
            {games.map((el,i)=>(<GamesList game={el} key={i} />))}
        </div>)}
        />

      </Switch>
    </div>
    </BrowserRouter>
  );
};

export default App;
