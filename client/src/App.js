import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./components/Profile";
import { getProfile } from "./JS/actions";
import PrivateRoute from "./components/PrivateRoute";
import Nav from "./components/Nav";
import { Button } from "bootstrap";
import ReservationForm from './components/ReservationForm';
import Gateway from './components/Gateway';
import Adminpage from './components/Admin/Adminpage';



const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  useEffect(() => {
    dispatch(getProfile());
  }, [isAuth]);

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Nav {...props} />} />
        <Route exact path="/profile" component={Profile} render={(props) => <Profile {...props} />} />
        <Route exact path="/admin" component={Adminpage} render={(props) => <Adminpage {...props} />} />
        <Route exact path ="/gateway" component={Gateway} render ={(props)=> <Gateway {...props}/>} />
      </Switch>
    </div>
    </BrowserRouter>
  );
};

export default App;
