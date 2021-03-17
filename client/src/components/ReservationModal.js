import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { addReservation } from "../JS/actions/reservationAction";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { Button, Card, Form } from "react-bootstrap";
import {decodeToken} from 'react-jwt';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



const ReservationModal = () => {

    const [userName,setUsername]= useState();
    const [date,setDate]= useState();
    const [price,setPrice]= useState();    
    const [status,setStatus]= useState();    
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const token = localStorage.getItem("token")
    const decoded = decodeToken(token)

    const registerReservation = () => {
        dispatch(
            addReservation({
                userName,
                date,
                price,
                status
          })
        );
    
        //date and time should be set  with a date picker
        setDate("");
        // price will be automatically set based on game price
        setPrice("");
        //
        setStatus("");
      }

      useEffect(() => {
        setStatus("Pending");
        setUsername(decoded.name);
      });
  
    return (
        <div className="Modal">
          <Button variant="danger" onClick={handleShow}>
            Add Reservation
          </Button>
    
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Make a Reservation</Modal.Title>
            </Modal.Header>
            <Modal.Body className="Add">
              <Card.Body>
                <Card.Text>
                  <Form>
                    <Form.Group
                      style={{ textAlign: "left" }}
                    >
                      <Form.Label>Date : </Form.Label>
                        <DatePicker
                         selected={date} 
                         dateFormat="MM/dd/yyyy h:mm aa"
                         onChange={(date)=>setDate(date)}
                         timeInputLabel="Time:"
                         showTimeInput
                         />
                    </Form.Group>

                    <h6>     <Form.Label>User Name :</Form.Label></h6>
                      <Form.Control
                        type="text"
                        name="username"
                        placeholder="Enter your name"
                        onChange={(e)=>setUsername(e.target.value)}
                        required
                      />
                    </Form.Group>
    
                    <Form.Group
                      style={{ textAlign: "left" }}
                    >
                     <h6>    <Form.Label>Date :</Form.Label></h6>
                      <Form.Control
                        type="text"
                        name="date"
                        placeholder="Pick a date"
                        onChange={(e)=>setDate(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      style={{ textAlign: "left" }}
                    >
                 <h6>     <Form.Label>time :</Form.Label></h6>
                      <Form.Control
                        type="text"
                        name="time"
                        placeholder="pick a time"
                        onChange={(e)=>setTime(e.target.value)}
                      />
                    </Form.Group>
    
                    <Form.Group
                      style={{ textAlign: "left" }}
                    >
                   <h6>      <Form.Label>Price :</Form.Label></h6>
                      <Form.Control
                        type="text"
                        name="price"
                        onChange={(e)=>setPrice(e.target.value)}
                        required
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
                  registerReservation();
                }}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
}

export default ReservationModal
