import {
  GET_RESERVATIONS,
  RESERVATIONS_LOADING,
  ADD_RESERVATION,
  UPDATE_RESERVATION,
  DELETE_RESERVATION,
  VALIDATE_RESERVATION
} from "../constants/actionsTypes";
import axios from "axios";

export const getReservations = () => (dispatch) => {
  try {
    axios
      .get("/reservations")
      .then((res) => dispatch({ type: GET_RESERVATIONS, payload: res.data }))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export const addReservation = (reservation) => (dispatch) => {
  try {
    axios.post("/reservations", reservation).then((res) => {
      dispatch({
        type: ADD_RESERVATION,
        payload: res.data.newReservation,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const modifyReservation = (id, updatedReservation) => (dispatch) => {
  try {
    axios.put(`/reservations/${id}`, updatedReservation).then((res) =>
      dispatch({
        type: UPDATE_RESERVATION,
        payload: res.data,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
export const deleteReservation = (id) => (dispatch) => {
  try {
    axios.delete(`/reservations/${id}`);
    dispatch({
      type: DELETE_RESERVATION,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
export const validateReservation = (id) => (dispatch) => {
  try {
    axios.patch(`/reservations/${id}`).then((res)=>  dispatch
    ({
      type: VALIDATE_RESERVATION,
      payload: res.data.validReservation.status,
    }))
  } catch (error) {
    console.log(error);
  }
};



export const setReservationsLoading = () => {
  return {
    type: RESERVATIONS_LOADING,
  };
};
