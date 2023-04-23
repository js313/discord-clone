const { connectedUsers } = require("../../serverStore");

const FriendRequest = require("../../models/friendRequest");
const User = require("../../models/user");

exports.updateFriendRequests = async (userId, io) => {
  try {
    const friendRequests = await FriendRequest.find({
      receiverId: userId,
    }).populate("senderId", "_id username email");
    emitEvent("friend-requests", userId, io, friendRequests);
  } catch (error) {
    console.log(error);
  }
};

exports.updateFriendsList = async (userId, io) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");
    let friends = user.friends || [];
    friends = await Promise.all(
      friends.map(async (friendId) => {
        const friendData = await User.findById(friendId);
        return {
          id: friendData.id,
          username: friendData.username,
          email: friendData.email,
          online: isOnline(friendData.id),
        };
      })
    );
    emitEvent("friends-list", userId, io, friends);
  } catch (error) {
    console.log(error);
  }
};

const isOnline = (userId) => {
  return connectedUsers.has(userId);
};

const emitEvent = (event, userId, io, data) => {
  const userSockets = connectedUsers.get(userId);
  if (userSockets && io) {
    userSockets.forEach((socket) => {
      io.to(socket).emit(event, data);
    });
  }
};
