import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../JS/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { Button, Card, Form } from "react-bootstrap";

//Modal.setAppElement("#root");
    const RegisterModal = () =>{
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
    }

    useEffect(() => {
      setRole("User");
    }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Modal">
      <Button variant="danger" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Add">
          <Card.Body>
            <Card.Text>
              <Form>
                <Form.Group
                  controlId="formBasicEmail"
                  style={{ textAlign: "left" }}
                >
                 <h6>      <Form.Label>Name :</Form.Label></h6>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={(e)=>setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group
                  controlId="formBasicEmail"
                  style={{ textAlign: "left" }}
                >
             <h6>          <Form.Label>Email :</Form.Label></h6>
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
                <h6>       <Form.Label>Password :</Form.Label></h6>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  controlId="formBasicEmail"
                  style={{ textAlign: "left" }}
                >
                 <h6>      <Form.Label>Phone :</Form.Label></h6>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Enter your phone"
                    onChange={(e)=>setPhoneNumber(e.target.value)}
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
            onClick={() => {
              handleClose();
              addUser();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
          }

export default RegisterModal;
