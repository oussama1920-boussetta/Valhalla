import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { userLogin } from "../JS/actions";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loading = useSelector((state) => state.userReducer.loading);
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();

    dispatch(
      userLogin({
        email,
        password,
      })
    );
  };

  if (isAuth) return <Redirect to="/profile" />;

  return (
    <div className="container">
      {loading ? (
        <h1> Please wait </h1>
      ) : (
        <div className="col-md-3 offset-mt-3">
          <div className="row">
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="row">
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="row">
            <button type="submit" className="btn btn-primary" onClick={login}>
              {" "}
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;