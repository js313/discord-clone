const socketIO = require("socket.io");
const authSocket = require("./middlewares/authSocket");
const {
  newConnectionHandler,
  removeConnectionHandler,
} = require("./socketHandlers/newConnectionHandler");
const {
  updateFriendRequests,
  updateFriendsList: updateFriendList,
} = require("./socketHandlers/updates/friends");

let io = null;

const registerSocketServer = (server) => {
  io = socketIO(server, {
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
    updateRequestList(socket.user.id, io);
    updateFriendsList(socket.user.id, io);
    socket.on("disconnect", () => {
      removeConnectionHandler(socket, io);
      console.log("Client disconnected");
    });
  });
};

const updateRequestList = (userId) => {
  updateFriendRequests(userId, io);
};

const updateFriendsList = (userId) => {
  updateFriendList(userId, io);
};

module.exports = { registerSocketServer, updateRequestList, updateFriendsList };
