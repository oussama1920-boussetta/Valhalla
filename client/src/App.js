import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import { getProfile } from "./JS/actions";
import PrivateRoute from "./components/PrivateRoute";
import Nav from "./components/Nav";
import { Button } from "bootstrap";
import { getReservations } from './JS/actions/reservationAction';
import ReservationsTable from './components/ReservationsTable';
import ReservationModal from './components/ReservationModal';


const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const reservations = useSelector((state) => state.reservationReducer.reservations);
  const getAllReservations = () => {
    dispatch(getReservations());
  };

  useEffect(() => {
    getAllReservations();
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
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
        {/* <Route exact path="/login" render={(props) => <Login {...props} />} /> */}

         {/* Router for reservations */}
   <Route path="/reservations_list"
        render={()=>(<div className="reservationsList">
            {reservations.map((el,i)=>(<ReservationsTable reservation={el} key={i} />))}
        </div>)}
        />
        <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>

      <Nav />
    </div>
    </BrowserRouter>
  );
};

export default App;
