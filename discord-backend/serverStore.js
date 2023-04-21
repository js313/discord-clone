const connectedUsers = new Map();

const addUser = (socketId, userId) => {
  connectedUsers.set(socketId, userId);
};

const removeUser = (socketId) => {
  connectedUsers.delete(socketId);
};

module.exports = { addUser, removeUser, connectedUsers };
