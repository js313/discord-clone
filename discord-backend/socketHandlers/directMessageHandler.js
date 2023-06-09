const Conversation = require("../models/conversation");
const Message = require("../models/message");
const { connectedUsers } = require("../serverStore");
const updateChatHistory = require("./updates/chat");

const directMessageHandler = async (socket, io, data) => {
  try {
    const senderId = socket.user.id;
    const { receiverId, content } = data;
    // Save message to database
    const message = await Message.create({
      sender: senderId,
      content,
      type: "direct",
      contentType: "text",
    });

    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    // if conversation exists, add message to conversation
    // else create new conversation and add message to conversation
    if (conversation) {
      conversation.messages = [message._id, ...conversation.messages];
      await conversation.save();
    } else {
      conversation = await Conversation.create({
        members: [senderId, receiverId],
        messages: [message._id],
      });
    }

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
