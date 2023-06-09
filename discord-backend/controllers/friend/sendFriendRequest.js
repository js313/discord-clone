const FriendRequest = require("../../models/friendRequest");
const User = require("../../models/user");
const { updateRequestList } = require("../../socketServer");

const sendFriendRequestController = async (req, res, next) => {
  try {
    let { email: receiverEmail } = req.body;
    receiverEmail = receiverEmail.toLowerCase();
    const { email: senderEmail, id: senderId } = req.user;
    if (senderEmail == receiverEmail) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const receiver = await User.findOne({ email: receiverEmail });
    if (!receiver) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const alreadyFriends = await User.find({
      $and: [{ _id: senderId }, { friends: receiver.id }],
    });
    if (alreadyFriends && alreadyFriends.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Already friends with user",
      });
    }
    const alreadyPendingRequest = await FriendRequest.find({
      $or: [
        { $and: [{ senderId }, { receiverId: receiver.id }] },
        { $and: [{ receiverId: senderId }, { senderId: receiver.id }] },
      ],
    });
    if (alreadyPendingRequest && alreadyPendingRequest.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Request already exists",
      });
    }
    await FriendRequest.create({
      senderId,
      receiverId: receiver.id,
    });
    updateRequestList(receiver.id);
    return res
      .status(201)
      .json({ success: true, message: "Request sent successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = sendFriendRequestController;
