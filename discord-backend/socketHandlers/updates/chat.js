const Conversation = require("../../models/conversation");

const updateChatHistory = async (conversationId, toSockets, io) => {
  const conversation = await Conversation.findById(conversationId).populate({
    path: "messages",
    model: "Message",
    populate: {
      path: "sender",
      model: "User",
      select: "username _id",
    },
  });

  toSockets.forEach((socketId) => {
    io.to(socketId).emit("update-chat-history", conversation);
  });
};

module.exports = updateChatHistory;
