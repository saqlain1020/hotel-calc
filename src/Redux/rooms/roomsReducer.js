import { ROOMS_SET_RESULT, ROOMS_SET_ROOMS } from "./roomsConstants";

const initialState = {
  premiumRooms: 0,
  economyRooms: 0,
  result: [0, 0],
};

const roomsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ROOMS_SET_ROOMS:
      return { ...state, ...payload };
    case ROOMS_SET_RESULT:
      return { ...state, result: payload };
    default:
      return state;
  }
};

export default roomsReducer;
