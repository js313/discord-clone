const Group = require("../../models/group");
const { connectedUsers } = require("../../serverStore");

exports.updateGroupList = async (userId, io) => {
  try {
    const groups = await Group.find({ "members.user": userId });
    const toSockets = connectedUsers.get(userId);
    toSockets.forEach((socket) => {
      io.to(socket).emit("groups-list", groups);
    });
  } catch (error) {
    console.log(error);
  }
};
