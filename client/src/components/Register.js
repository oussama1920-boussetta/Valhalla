import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../JS/actions";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  const dispatch = useDispatch();


  const addUser = () => {
    dispatch(
      userRegister({
        name,
        email,
        phoneNumber,
        password,
        role
      })
    );

    setName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setRole("");
  };

  return (
    <div className="container">
      <Link to="/login">
        <button> Login </button>
      </Link>

      <div className="col-md-8 offset-md-4">
        <div className="row">
          <h1>Register</h1>

          <div className="row mt-3">
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="row mt-3">
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="row mt-3">
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="row mt-3">
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="row mt-3">
            <button type="submit" className="btn btn-primary" onClick={addUser}>
              {" "}
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;