const express = require("express");
const { getChat } = require("../controllers/chat/chatControllers");
const router = express.Router();

router.get("/:receiverId", getChat);

module.exports = router;
