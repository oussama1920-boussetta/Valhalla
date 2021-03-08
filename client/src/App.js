import { Switch, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { getProfile } from "./JS/actions";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  useEffect(() => {
    dispatch(getProfile());
  }, [isAuth]);


  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Register {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
};

export default App;