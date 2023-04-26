const Conversation = require("../../models/conversation");

exports.getChatByReceiverId = async (req, res) => {
  try {
    const senderId = req.user.id;
    const { receiverId } = req.params;

    const conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    }).populate({
      path: "messages",
      populate: {
        path: "sender",
        select: "username _id",
      },
    });

    res.status(200).json({ conversation });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
