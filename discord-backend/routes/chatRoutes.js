const express = require("express");
const { getChatByReceiverId } = require("../controllers/chat/chatControllers");
const router = express.Router();

router.get("/:receiverId", getChatByReceiverId);

module.exports = router;
