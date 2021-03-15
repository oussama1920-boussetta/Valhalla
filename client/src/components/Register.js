import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../JS/actions";
import { Link } from "react-router-dom";
import{Button} from 'react-bootstrap'
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
    setRole("")
  };

  useEffect(()=>{
    setRole("User")
  },[])

  return (
    <div className="container-nav">
      <Link to="/login">
      <Button variant="danger">Login</Button>{' '}      </Link>

      <div >
        <div className="row">
          <h3>Register</h3>

          <div>
            <input
              type="text"
              name="name"
              placeholder='name'
              className="form-control"
              onChange={(e) => setName(e.target.value) }
              required />
          </div>
          <div >
            <input
              type="text"
              name="email"
              placeholder='Email'
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              required  />
          </div>
          <div >
            <input
              type="text"
              name="phoneNumber"
              placeholder='phoneNumber'
              className="form-control"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div >
            <input
              type="password"
              name="password"
              placeholder='password'
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
 <div >
          <Button variant="danger" onClick={addUser}>
              {" "}
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;