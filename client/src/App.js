import { Switch, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { getProfile } from "./JS/actions";
import PrivateRoute from "./components/PrivateRoute";
import Nav from './components/Nav'


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
        {/* <Route exact path="/login" render={(props) => <Login {...props} />} /> */}
       
        <PrivateRoute exact path="/profile" component={Profile} />
       
      </Switch>


      <Nav/>
    </div>
  );
};

export default App;