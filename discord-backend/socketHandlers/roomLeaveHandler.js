const { activeRooms } = require("../serverStore");
const updateRooms = require("./updates/room");

const roomLeaveHandler = (socket, io, data) => {
  const { roomId } = data;
  if (activeRooms.has(roomId)) {
    const ar = activeRooms.get(roomId);
    ar.participants = ar.participants.filter((p) => {
      return p.userId !== socket.user.id;
    });
    updateRooms(socket, io);
  }
};

module.exports = roomLeaveHandler;
