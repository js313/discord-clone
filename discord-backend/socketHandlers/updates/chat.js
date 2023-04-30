const Conversation = require("../../models/conversation");
const Message = require("../../models/message");

const updateChatHistory = async (conversation, toSockets, io) => {
  try {
    const messages = await Message.find({
      conversation: conversation._id,
    })
      .sort({ date: -1 })
      .populate({
        path: "sender",
        select: "imageBackground _id username",
      });

    toSockets.forEach((socketId) => {
      io.to(socketId).emit("update-chat-history", {
        ...conversation,
        messages,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateChatHistory;
