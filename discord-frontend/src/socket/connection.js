import io from "socket.io-client";

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
};
