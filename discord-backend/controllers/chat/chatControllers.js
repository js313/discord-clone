const Conversation = require("../../models/conversation");
const Group = require("../../models/group");
const Message = require("../../models/message");
const { updateGroupsList } = require("../../socketServer");

exports.getChat = async (req, res) => {
  try {
    const senderId = req.user.id;
    const { receiverId } = req.params;

    const conversation = await Conversation.findOne({
      sender: senderId,
      receiver: receiverId,
    }).lean();

    let messages = [];
    if (conversation) {
      messages = await Message.find({
        conversation: conversation._id,
      })
        .sort({ date: -1 })
        .populate({
          path: "sender",
          select: "imageBackground _id username",
        });
    } else {
      return res.status(404).json({
        success: false,
        message: "No messages found",
      });
    }

    res.status(200).json({
      success: true,
      message: "",
      data: { ...conversation, messages },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

exports.getGroup = async (req, res) => {
  try {
    const senderId = req.user.id;
    const { id: groupId } = req.params;

    const group = await Group.findOne({
      _id: groupId,
      "members.user": senderId,
    }).lean();
    let messages = [];
    if (group) {
      const member = group.members.find((member) => {
        return member.user.toString() === senderId;
      });
      messages = await Message.find({
        group: groupId,
        date: { $gte: member.joinedAt, $lte: member.leftAt || Date.now() },
      })
        .sort({ date: -1 })
        .populate({
          path: "sender",
          select: "imageBackground _id username",
        });
    } else {
      return res.status(404).json({
        success: false,
        message: "Group does not exist or you are not a part of it",
      });
    }
    res
      .status(200)
      .json({ success: true, message: "", data: { ...group, messages } });
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
