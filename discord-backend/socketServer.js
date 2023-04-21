const socketIO = require("socket.io");
const authSocket = require("./middlewares/authSocket");
const {
  newConnectionHandler,
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
    socket.on("disconnect", () => console.log("Client disconnected"));
  });
};

module.exports = { registerSocketServer };
