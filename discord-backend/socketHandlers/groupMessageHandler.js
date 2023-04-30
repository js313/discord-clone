const Group = require("../models/group");
const Message = require("../models/message");
const { connectedUsers } = require("../serverStore");
const { updateGroupHistory } = require("./updates/group");

const groupMessageHandler = async (socket, io, data) => {
  try {
    const senderId = socket.user.id;
    const { groupId, content } = data;
    console.log(data);

    let group = await Group.findById(groupId);
    if (
      !group ||
      !group.members.find((member) => senderId === member.user.toString())
    ) {
      throw new Error("group not found");
    }
    const message = await Message.create({
      sender: senderId,
      group: groupId,
      content,
      type: "group",
      contentType: "text",
    });

    let toSockets = [];
    group.members.map((member) =>
      toSockets.push(...(connectedUsers.get(member.user.toString()) || []))
    );

    updateGroupHistory(group, toSockets, io);
  } catch (error) {
    console.log(error);
  }
};

module.exports = groupMessageHandler;
