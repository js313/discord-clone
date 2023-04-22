import io from "socket.io-client";
import store from "../app/store";
import { setFriendRequests } from "../app/actions/friendsAction";

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
    const { friendRequests } = data;
    store.dispatch(setFriendRequests(friendRequests));
  });
};

export const disconnectFromSocket = () => {
  if (socket) socket.disconnect();
};
