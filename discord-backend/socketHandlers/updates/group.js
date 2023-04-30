const Group = require("../../models/group");
const Message = require("../../models/message");
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

exports.updateGroupHistory = async (group, toSockets, io) => {
  try {
    const messages = await Message.find({
      group: group._id,
    })
      .sort({ date: -1 })
      .populate({
        path: "sender",
        select: "imageBackground _id username",
      });

    toSockets.forEach((socket) => {
      io.to(socket).emit("update-group-history", {
        ...group,
        messages,
      });
    });
  } catch (error) {
    console.log(error);
  }
};
