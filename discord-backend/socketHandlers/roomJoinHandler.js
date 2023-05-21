const User = require("../models/user");
const { activeRooms } = require("../serverStore");
const updateRooms = require("./updates/room");

const roomJoinHandler = async (socket, io, data) => {
  const { roomId } = data;
  const user = await User.findById(socket.user.id);
  const participantDetails = {
    userId: socket.user.id,
    socketId: socket.id,
    username: user.username,
  };
  // TODO: Delete rooms created by the user that joined someone else's room
  let ar = activeRooms.get(roomId);
  if (ar && ar.participants?.length < 5) {
    if (!ar.participants.find((p) => p.userId === participantDetails.userId)) {
      ar.participants.push(participantDetails);
      updateRooms(socket, io);
    }
  }
};

module.exports = roomJoinHandler;
