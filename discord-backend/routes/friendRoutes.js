const express = require("express");
const router = express.Router();

const Joi = require("joi");
const friendController = require("../controllers/friend/friendController");
const validator = require("express-joi-validation").createValidator({});

const friendRequestSchema = Joi.object({
  email: Joi.string().email(),
});

router.post(
  "/send-request",
  validator.body(friendRequestSchema),
  friendController.controllers.sendFriendRequest
);

module.exports = router;
