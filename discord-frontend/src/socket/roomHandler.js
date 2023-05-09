import { setOpenRoom, setRoomDetails } from "../app/actions/roomActions";
import store from "../app/store";
import { createNewRoomSocket } from "./connection";

export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true));
  createNewRoomSocket();
};

export const newRoomCreated = (roomDetails) => {
  store.dispatch(setRoomDetails(roomDetails));
};
