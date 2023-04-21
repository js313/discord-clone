const connectedUsers = new Map();

const addUser = (socketId, userId) => {
  connectedUsers.set(socketId, userId);
};

const removeUser = (userId) => {
  connectedUsers.delete(userId);
};

module.exports = { addUser, removeUser, connectedUsers };
