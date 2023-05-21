const connectedUsers = new Map();
const activeRooms = new Map();

const addUser = (userId, socketId) => {
  if (connectedUsers.has(userId)) {
    connectedUsers.get(userId).push(socketId);
  } else {
    connectedUsers.set(userId, [socketId]);
  }
};

const removeUser = (userId, socketId) => {
  if (connectedUsers.has(userId)) {
    connectedUsers.set(
      userId,
      connectedUsers.get(userId).filter((si) => {
        return si != socketId;
      })
    );
    if (connectedUsers.get(userId).length === 0) connectedUsers.delete(userId);
  }
};

const newActiveRoom = (userId, socketId, username) => {
  if (!activeRooms.has(socketId)) {
    const newActiveRoom = {
      id: userId,
      roomCreator: {
        userId,
        socketId,
        username,
      },
      participants: [
        {
          userId,
          socketId,
          username,
        },
      ],
    };
    activeRooms.set(socketId, newActiveRoom);
    return newActiveRoom;
  }
  return activeRooms.get(socketId);
};

module.exports = {
  addUser,
  removeUser,
  connectedUsers,
  newActiveRoom,
  activeRooms,
};
