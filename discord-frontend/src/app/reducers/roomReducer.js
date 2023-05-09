import { roomActions } from "../actions/roomActions";

const initState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  remoteStreams: [],
  audioOnly: false,
  screenSharingStream: null,
  isScreenSharingActive: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case roomActions.OPEN_ROOM:
      return {
        ...state,
        isUserInRoom: action.payload.isUserInRoom,
        isUserRoomCreator: action.payload.isUserRoomCreator,
      };
    case roomActions.SET_ROOM_DETAILS:
      return {
        ...state,
        roomDetails: action.payload.roomDetails,
      };
    default:
      return state;
  }
};

export default reducer;
