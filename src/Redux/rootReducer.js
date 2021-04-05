import { combineReducers } from "redux";
import roomsReducer from "./rooms/roomsReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  whitelist: ["rooms"],
  storage,
};

const rootReducer = combineReducers({
  rooms: roomsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
