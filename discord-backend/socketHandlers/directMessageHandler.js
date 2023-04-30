const Conversation = require("../models/conversation");
const Message = require("../models/message");
const { connectedUsers } = require("../serverStore");
const updateChatHistory = require("./updates/chat");

const directMessageHandler = async (socket, io, data) => {
  try {
    const senderId = socket.user.id;
    const { receiverId, content } = data;

    let conversation = await Conversation.findOne({
      sender: senderId,
      receiver: receiverId,
    });
    // if conversation exists, add message to conversation
    // else create new conversation and add message to conversation
    if (!conversation) {
      conversation = await Conversation.create({
        sender: senderId,
        receiver: receiverId,
      });
    }
    const message = await Message.create({
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
      updateChatHistory(conversation._id, socketIds, io);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = directMessageHandler;
