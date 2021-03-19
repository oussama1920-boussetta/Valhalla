import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addReservation,getReservations,modifyReservation } from "../JS/actions/reservationAction";

import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { Button, Card, Form } from "react-bootstrap";
import { decodeToken } from "react-jwt";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ReservationModal = ({currentId,setcurrentId}) => {
  const [userName, setUsername] = useState();
  const [date, setDate] = useState();
  const [price, setPrice] = useState();
  const [status, setStatus] = useState();
  const [show, setShow] = useState(false);
  const [reservationData, setreservationData] = useState({userName:" ",
    date:"",
    price:"",
    status:""
  })
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const reservation = useSelector(
    (state) => currentId? state.reservationReducer.reservations.find((reserve)=>reserve._id===currentId):null
  );
  useEffect(() => {
    if(reservation) setreservationData(reservation)
  },[reservation]);
  const token = localStorage.getItem("token");
  const decoded = decodeToken(token);

  const registerReservation = () => {
    dispatch(
      addReservation({
        userName,
        date,
        price,
        status,
      })
    );
    //date and time should be set  with a date picker
    setDate("");
    // price will be automatically set based on game price
    setPrice("");
    //
    setStatus("");
  };
      if(currentId){
        dispatch(modifyReservation(currentId,reservationData))
      }

  useEffect(() => {
    setStatus("Pending");
    setUsername(decoded.name);
  });



  return (
    
    <div className="Modal">
      <Button className='btnReserve' variant="danger" onClick={handleShow}>
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
                <Form.Group style={{ textAlign: "left" }}>
                  <Form.Label>Date : </Form.Label>
                  <DatePicker
                    selected={date}
                    dateFormat="MM/dd/yyyy h:mm aa"
                    onChange={(date) => setDate(date)}
                    timeInputLabel="Time:"
                    showTimeInput
                  />
                </Form.Group>

                <Form.Group style={{ textAlign: "left" }}>
                  <Form.Label>User Name :</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter your name"
                    value={userName}
                    disabled
                    required
                  />
                </Form.Group>
{/* 
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>GamesList</Form.Label>
                  <Form.Control
                  onChange={(e)=>
                    setGamesList(...gamesList,e.target.value)}
                  as="select" custom>
                    {games.map((game)=>(
                    <option>{game.title}</option>
                    ))};
                  </Form.Control>
                </Form.Group> */}

                <Form.Group style={{ textAlign: "left" }}>
                    <Form.Label>Price :</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    onChange={(e) => setPrice(e.target.value)}
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
              dispatch(getReservations());
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReservationModal;
