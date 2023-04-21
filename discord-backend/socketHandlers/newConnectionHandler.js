const serverStore = require("../serverStore");

const newConnectionHandler = (socket, io) => {
  const user = socket.user;

  serverStore.addUser(socket.id, user.id);
};

const removeConnectionHandler = (socket, io) => {
  serverStore.removeUser(socket.id);
};

module.exports = { newConnectionHandler, removeConnectionHandler };
