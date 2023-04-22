const FriendRequest = require("../../models/friendRequest");

export const updateFriendRequests = async (userId) => {
  try {
    const friendRequests = await FriendRequest.find({
      receiverId: userId,
    }).populate("senderId", "_id username email");
  } catch (error) {
    console.log(error);
  }
};
