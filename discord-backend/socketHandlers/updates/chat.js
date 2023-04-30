const Conversation = require("../../models/conversation");
const Message = require("../../models/message");

const updateChatHistory = async (conversationId, toSockets, io) => {
  //optimise
  const conversation = await Conversation.findById(conversationId);
  const messages = await Message.find({
    conversation: conversationId,
  })
    .sort({ date: -1 })
    .populate({
      path: "sender",
      select: "imageBackground _id username",
    });

  toSockets.forEach((socketId) => {
    io.to(socketId).emit("update-chat-history", { ...conversation, messages });
  });
};

module.exports = updateChatHistory;
