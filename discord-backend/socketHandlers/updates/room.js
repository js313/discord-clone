const { activeRooms, connectedUsers } = require("../../serverStore");
const User = require("../../models/user");

const updateRooms = async (socket, io) => {
  const friends = (await User.findById(socket.user.id))?.friends;
  if (!friends) return;
  const toSockets = [];
  friends.forEach((friend) => {
    toSockets.push(...(connectedUsers.get(friend.toString()) || []));
  });
  toSockets.push(...(connectedUsers.get(socket.user.id) || []));
  const roomList = [];
  toSockets.forEach((socket) => {
    const room = activeRooms.get(socket);
    room && roomList.push(room);
  });
  toSockets.forEach((socket) => {
    io.to(socket).emit("active-rooms", roomList);
  });
};

module.exports = updateRooms;
