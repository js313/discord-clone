const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;
