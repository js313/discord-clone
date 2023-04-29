const Conversation = require("../../models/conversation");
const Group = require("../../models/group");
const { updateGroupsList } = require("../../socketServer");

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
        select: "username _id image imageBackground",
      },
    });

    res.status(200).json({ success: true, message: "", data: conversation });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

exports.getGroup = async (req, res) => {
  try {
    const senderId = req.user.id;
    const { id: groupId } = req.params;

    const group = await Group.findOne({ _id: groupId, members: senderId });

    res.status(200).json({ success: true, message: "", data: group });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

exports.newGroup = async (req, res) => {
  try {
    const adminId = req.user.id;
    const { name, description } = req.body;

    const newGroup = new Group({
      members: [
        {
          user: adminId,
          joinedAt: Date.now(),
          isAdmin: true,
        },
      ],
      name,
      description,
      iconBackground: "#" + Math.floor(Math.random() * 16777215).toString(16),
    });

    await newGroup.save();

    updateGroupsList(adminId);

    res.status(201).json({ success: true, message: "", data: newGroup });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
