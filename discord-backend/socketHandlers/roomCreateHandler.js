const { newActiveRoom } = require("../serverStore");

const roomCreateHandler = (socket) => {
  const socketId = socket.id;
  const userId = socket.user.id;

  const roomDetails = newActiveRoom(userId, socketId);

  socket.emit("room-create", roomDetails);
};

module.exports = roomCreateHandler;
