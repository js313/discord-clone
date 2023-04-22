const { connectedUsers } = require("../../serverStore");

const FriendRequest = require("../../models/friendRequest");

exports.updateFriendRequests = async (userId, io) => {
  try {
    const friendRequests = await FriendRequest.find({
      receiverId: userId,
    }).populate("senderId", "_id username email");
    const userSockets = connectedUsers.get(userId);
    if (userSockets && io) {
      userSockets.forEach((socket) => {
        io.to(socket).emit("friend-requests", friendRequests);
      });
    }
  } catch (error) {
    console.log(error);
  }
};
