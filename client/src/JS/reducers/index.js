import { combineReducers } from "redux";
import userReducer from "./userReducer";
import reservationReducer from './reservationReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
  userReducer,
  gameReducer,
  reservationReducer
});

export default rootReducer;