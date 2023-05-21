const User = require("../models/user");
const { newActiveRoom } = require("../serverStore");
const updateRooms = require("./updates/room");

const roomCreateHandler = async (socket, io) => {
  const socketId = socket.id;
  const userId = socket.user.id;
  const user = await User.findById(userId);
  const roomDetails = newActiveRoom(userId, socketId, user.username);

  socket.emit("room-create", roomDetails);

  updateRooms(socket, io);
};

module.exports = roomCreateHandler;
