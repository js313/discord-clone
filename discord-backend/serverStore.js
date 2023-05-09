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

const newActiveRoom = (userId, socketId) => {
  if (!activeRooms.has(socketId)) {
    const newActiveRoom = {
      roomCreator: {
        userId,
        socketId,
      },
      participants: [
        {
          userId,
          socketId,
        },
      ],
    };
    activeRooms.set(socketId, [newActiveRoom]);
    console.log(activeRooms);
    return newActiveRoom;
  }
  return activeRooms.get(socketId);
};

module.exports = { addUser, removeUser, connectedUsers, newActiveRoom };
