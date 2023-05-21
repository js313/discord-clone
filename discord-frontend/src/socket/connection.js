import io from "socket.io-client";
import store from "../app/store";
import { setFriendRequests, setFriends } from "../app/actions/friendsAction";
import { setMessages } from "../app/actions/chatActions";
import { updateActiveRooms } from "./roomHandler";

let socket = null;

export const connectToSocket = (user) => {
  socket = io("http://localhost:5002", {
    auth: {
      token: user.token,
    },
  });
  socket.on("connect", () => {
    isConnected = true;
    console.log("Connected to socket server: " + socket.id);
  });

  socket.on("friend-requests", (data) => {
    const friendRequests = data;
    store.dispatch(setFriendRequests(friendRequests));
  });

  socket.on("friends-list", (friends) => {
    store.dispatch(setFriends(friends));
  });

  socket.on("update-chat-history", (data) => {
    store.dispatch(setMessages(data.messages));
  });

  socket.on("room-create", (data) => {
    console.log("Room create", data);
  });

  socket.on("active-rooms", (data) => {
    console.log(data);
    updateActiveRooms(data);
  });
};

export let isConnected = false;

export const disconnectFromSocket = () => {
  if (socket) {
    isConnected = false;
    socket.disconnect();
  }
};

export const sendDirectMessage = (data) => {
  socket.emit("direct-message", data);
};

export const createNewRoomSocket = () => {
  socket.emit("room-create");
};

export const joinRoomSocket = (data) => {
  socket.emit("room-join", data);
};

export const leaveRoomSocket = (data) => {
  socket.emit("room-leave", data);
};
