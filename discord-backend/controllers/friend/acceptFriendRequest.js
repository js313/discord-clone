const FriendRequest = require("../../models/friendRequest");
const User = require("../../models/user");
const { updateRequestList, updateFriendsList } = require("../../socketServer");

const acceptFriendRequest = async (req, res, next) => {
  try {
    const { id } = req.body;
    const request = await FriendRequest.findById(id);
    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found",
      });
    }
    // check if already friends
    const alreadyFriends = await User.find({
      $or: [
        { $and: [{ _id: request.senderId }, { friends: request.receiverId }] },
        { $and: [{ _id: request.receiverId }, { friends: request.senderId }] },
      ],
    });
    if (alreadyFriends && alreadyFriends.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Already friends with user",
      });
    }
    await Promise.all([
      User.findByIdAndUpdate(request.senderId, {
        $push: { friends: request.receiverId },
      }),
      User.findByIdAndUpdate(request.receiverId, {
        $push: { friends: request.senderId },
      }),
    ]);
    await FriendRequest.findByIdAndDelete(id);
    updateRequestList(request.receiverId.toString());
    //update friends list for both receiver and sender
    updateFriendsList(request.receiverId.toString());
    updateFriendsList(request.senderId.toString());
    return res.status(200).json({
      success: true,
      message: "Friend added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = acceptFriendRequest;
