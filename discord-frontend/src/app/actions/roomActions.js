export const roomActions = {
  OPEN_ROOM: "ROOM.OPEN_ROOM",
  SET_ROOM_DETAILS: "ROOM.SET_ROOM_DETAILS",
  SET_ACTIVE_ROOMS: "ROOM.SET_ACTIVE_ROOMS",
  SET_LOCAL_STREAM: "ROOM.SET_LOCAL_STREAM",
  SET_REMOTE_STREAM: "ROOM.SET_REMOTE_STREAM",
  SET_AUDIO_ONLY: "ROOM.SET_AUDIO_ONLY",
  SET_SCREEN_SHARE_STREAM: "ROOM.SET_SCREEN_SHARE_STREAM",
};

export const setOpenRoom = (
  isUserRoomCreator = false,
  isUserInRoom = false
) => {
  return {
    type: roomActions.OPEN_ROOM,
    payload: { isUserInRoom, isUserRoomCreator },
  };
};

export const setRoomDetails = (roomDetails) => {
  return {
    type: roomActions.SET_ROOM_DETAILS,
    payload: { roomDetails },
  };
};

export const setActiveRooms = (rooms) => {
  return {
    type: roomActions.SET_ACTIVE_ROOMS,
    payload: { rooms },
  };
};
