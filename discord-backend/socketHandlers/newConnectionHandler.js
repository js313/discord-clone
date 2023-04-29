const User = require("../models/user");
const serverStore = require("../serverStore");
const {
  updateFriendRequests,
  updateFriendsList,
} = require("./updates/friends");
const { updateGroupList } = require("./updates/group");

const newConnectionHandler = async (socket, io) => {
  const user = socket.user;

  serverStore.addUser(user.id, socket.id);

  updateFriendRequests(socket.user.id, io);
  updateGroupList(socket.user.id, io);
  const userFriends = (await User.findById(socket.user.id))?.friends || [];
  userFriends.forEach((friendId) => updateFriendsList(friendId.toString(), io));
  updateFriendsList(socket.user.id, io);
};

const removeConnectionHandler = async (socket, io) => {
  //Have to get the list here again to check for newly added friends while the user was online
  const userFriends = (await User.findById(socket.user.id))?.friends || [];
  userFriends.forEach((friendId) => updateFriendsList(friendId.toString(), io));
  serverStore.removeUser(socket.user.id, socket.id);
};

module.exports = { newConnectionHandler, removeConnectionHandler };
