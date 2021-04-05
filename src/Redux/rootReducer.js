import { combineReducers } from "redux";
import roomsReducer from "./rooms/roomsReducer";

const rootReducer = combineReducers({
  rooms: roomsReducer,
});

export default rootReducer;
