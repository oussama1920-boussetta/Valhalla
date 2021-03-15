import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { userLogin } from "../JS/actions";

import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { Button, Card, Form } from "react-bootstrap";

const LoginModal=()=> {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

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


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if(isAuth) return <Redirect to='/profile'/>
  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
      Login
    </Button>

    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body className="Add">
        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>email :</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>password :</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Card.Text>
        </Card.Body>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="danger"
          onClick={login}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  )}

export default LoginModal;
