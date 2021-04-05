import { ROOMS_SET_RESULT, ROOMS_SET_ROOMS } from "./roomsConstants";

export const setRooms = (roomsArr) => {
  return {
    type: ROOMS_SET_ROOMS,
    payload: roomsArr,
  };
};

export const setResult = (resArr) => {
  return {
    type: ROOMS_SET_RESULT,
    payload: resArr,
  };
};
