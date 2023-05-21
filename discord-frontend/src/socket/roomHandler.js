import {
  setActiveRooms,
  setOpenRoom,
  setRoomDetails,
} from "../app/actions/roomActions";
import store from "../app/store";
import {
  createNewRoomSocket,
  joinRoomSocket,
  leaveRoomSocket,
} from "./connection";

export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true));
  createNewRoomSocket();
};

export const updateActiveRooms = (data) => {
  store.dispatch(setActiveRooms(data));
};

export const joinRoom = (data) => {
  store.dispatch(setRoomDetails(data));
  store.dispatch(setOpenRoom(false, true));
  joinRoomSocket(data);
};

export const leaveRoom = (data) => {
  const roomId = store.getState().room.roomDetails.roomId;
  leaveRoomSocket({ roomId });
  store.dispatch(setRoomDetails(null));
  store.dispatch(setOpenRoom(false, false));
};
