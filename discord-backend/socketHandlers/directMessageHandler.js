const Conversation = require("../models/conversation");
const Message = require("../models/message");
const { connectedUsers } = require("../serverStore");
const updateChatHistory = require("./updates/chat");

const directMessageHandler = async (socket, io, data) => {
  try {
    const senderId = socket.user.id;
    const { receiverId, content } = data;

    let conversation = await Conversation.findOne({
      $or: [
        { $and: [{ user1: senderId }, { user2: receiverId }] },
        { $and: [{ user1: receiverId }, { user2: senderId }] },
      ],
    }).lean();
    if (!conversation) {
      conversation = await Conversation.create({
        user1: senderId,
        user2: receiverId,
      });
    }
    await Message.create({
      sender: senderId,
      conversation: conversation._id,
      content,
      type: "direct",
      contentType: "text",
    });

    const socketIds = [
      ...(connectedUsers.get(receiverId) || []),
      ...(connectedUsers.get(senderId) || []),
    ];
    if (socketIds) {
      updateChatHistory(conversation, socketIds, io);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = directMessageHandler;
