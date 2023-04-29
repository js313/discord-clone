const express = require("express");
const { getGroup, newGroup } = require("../controllers/chat/chatControllers");
const router = express.Router();

router.post("/", newGroup);
router.get("/:id", getGroup);

module.exports = router;
