const connectedUsers = new Map();

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

module.exports = { addUser, removeUser, connectedUsers };
