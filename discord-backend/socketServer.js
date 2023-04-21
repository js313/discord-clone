const socketIO = require("socket.io");
const authSocket = require("./middlewares/authSocket");
const {
  newConnectionHandler,
  removeConnectionHandler,
} = require("./socketHandlers/newConnectionHandler");

const registerSocketServer = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  io.use((socket, next) => {
    authSocket(socket, next);
  });
  io.on("connection", (socket) => {
    console.log("New client connected: " + socket.id);
    newConnectionHandler(socket, io);
    socket.on("disconnect", () => {
      removeConnectionHandler(socket, io);
      console.log("Client disconnected");
    });
  });
};

module.exports = { registerSocketServer };
