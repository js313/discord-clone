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
const directMessageHandler = require("./socketHandlers/directMessageHandler");
const { updateGroupList } = require("./socketHandlers/updates/group");

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
  io.on("connection", async (socket) => {
    // console.log("New client connected: " + socket.id);
    newConnectionHandler(socket, io);

    socket.on("direct-message", (data) =>
      directMessageHandler(socket, io, data)
    );

    socket.on("disconnect", async () => {
      removeConnectionHandler(socket, io);
      // console.log("Client disconnected");
    });
  });
};

const updateRequestList = (userId) => {
  updateFriendRequests(userId, io);
};

const updateFriendsList = (userId) => {
  updateFriendList(userId, io);
};

const updateGroupsList = (userId) => {
  updateGroupList(userId, io);
};

module.exports = {
  registerSocketServer,
  updateRequestList,
  updateFriendsList,
  updateGroupsList,
};
