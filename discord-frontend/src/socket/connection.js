import io from "socket.io-client";
import store from "../app/store";
import { setFriendRequests, setFriends } from "../app/actions/friendsAction";
import { setMessages } from "../app/actions/chatActions";

let socket = null;

export const connectToSocket = (user) => {
  socket = io("http://localhost:5002", {
    auth: {
      token: user.token,
    },
  });
  socket.on("connect", () => {
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
};

export const disconnectFromSocket = () => {
  if (socket) socket.disconnect();
};

export const sendDirectMessage = (data) => {
  socket.emit("direct-message", data);
};

export const createNewRoomSocket = () => {
  socket.emit("room-create");
};
