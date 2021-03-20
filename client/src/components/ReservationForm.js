import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addReservation,
  getReservations,
  modifyReservation,
} from "../JS/actions/reservationAction";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Form } from "react-bootstrap";
import { decodeToken } from "react-jwt";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ReservationForm = ({ currentId, setcurrentId }) => {
  const [userName, setUsername] = useState();
  const [date, setDate] = useState();
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState();
  const [reservationData, setreservationData] = useState({
    userName: " ",
    date: "",
    price: "",
    status: "",
  });
  const dispatch = useDispatch();
  const reservationId = useSelector((state) =>
    currentId
      ? state.reservationReducer.reservations.find(
          (reserve) => reserve._id === currentId
        )
      : null
  );
  const reservations = useSelector(
    (state) => state.reservationReducer.reservations
  );
  useEffect(() => {
    if (reservationId) setreservationData(reservationId);
  }, [reservationId]);
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

  useEffect(() => {
    setPrice(currentId ? reservationId.price : 0);
    setStatus("Pending");
    setUsername(decoded.name);
  });

  return (
    <div className="resForm">
      <Form>
        <Form.Group style={{ textAlign: "left" }}>
          <Form.Label>Date : </Form.Label>
          <DatePicker
            selected={date}
            dateFormat="MM/dd/yyyy h:mm aa"
            onChange={(date) => setDate(date)}
            timeInputLabel="Time:"
            showTimeInput
            value={currentId ? reservationId.date : date}
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

        <Form.Group style={{ textAlign: "left" }}>
          <Form.Label>Price :</Form.Label>
          <Form.Control
            type="text"
            name="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            required
            defaultValue={price}
          />
        </Form.Group>
      </Form>
      <Button
        variant="danger"
        onClick={() => {
          registerReservation();
          dispatch(getReservations());
          if (currentId) {
            dispatch(modifyReservation(currentId, reservationData));
          }
        }}
      >
        Confirm
      </Button>
    </div>
  );
};

export default ReservationForm;
