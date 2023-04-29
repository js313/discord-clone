const { ref } = require("joi");
const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  joinedAt: Date,
  isAdmin: Boolean,
  leftAt: Date,
  active: { type: Boolean, default: true },
});

const groupSchema = new mongoose.Schema(
  {
    members: [memberSchema],
    icon: String,
    name: { type: String, required: true },
    description: String,
    iconBackground: String,
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
