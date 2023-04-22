const serverStore = require("../serverStore");

const newConnectionHandler = (socket, io) => {
  const user = socket.user;

  serverStore.addUser(user.id, socket.id);
};

const removeConnectionHandler = (socket, io) => {
  serverStore.removeUser(socket.user.id, socket.id);
};

module.exports = { newConnectionHandler, removeConnectionHandler };
