const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    enum: ["direct", "group"],
    default: "direct",
  },
  contentType: {
    type: String,
    enum: ["text", "image", "video", "audio"],
    default: "text",
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
