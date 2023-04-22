const mongoose = require("mongoose");

const requestInvitation = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const FriendRequest = mongoose.model("FriendRequest", requestInvitation);

module.exports = FriendRequest;
