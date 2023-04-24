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
const User = require("./models/user");

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
    updateRequestList(socket.user.id, io);
    const userFriends = (await User.findById(socket.user.id))?.friends || [];
    userFriends.forEach((friendId) =>
      updateFriendList(friendId.toString(), io)
    );

    updateFriendsList(socket.user.id, io);
    socket.on("disconnect", async () => {
      //Have to get the list here again to check for newly added friends while the user was online
      const userFriends = (await User.findById(socket.user.id))?.friends || [];
      userFriends.forEach((friendId) =>
        updateFriendList(friendId.toString(), io)
      );
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

module.exports = { registerSocketServer, updateRequestList, updateFriendsList };
