const FriendRequest = require("../../models/friendRequest");
const { updateRequestList } = require("../../socketServer");

const rejectFriendRequest = async (req, res) => {
  try {
    const { id } = req.body;
    const requestExists = await FriendRequest.exists({ _id: id });
    if (requestExists) {
      await FriendRequest.findByIdAndDelete(id);
    }
    updateRequestList(req.user.id);
    return res.status(200).json({
      success: true,
      message: "Request deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = rejectFriendRequest;
