const express = require("express");
const router = express.Router();

const Joi = require("joi");
const friendController = require("../controllers/friend/friendController");
const validator = require("express-joi-validation").createValidator({});
const rateLimit = require("express-rate-limit");

const friendRequestSchema = Joi.object({
  email: Joi.string().email().required(),
});

const friendRequestDecisionSchema = Joi.object({
  id: Joi.string().required(),
});

router.post(
  "/send-request",
  validator.body(friendRequestSchema),
  friendController.controllers.sendFriendRequest
);

const acceptFriendRequestLimiter = rateLimit({
  windowMs: 5 * 1000, // 5 senonds
  max: 1, // allow only 1 request per windowMs
});

router.post(
  "/accept-request",
  acceptFriendRequestLimiter,
  validator.body(friendRequestDecisionSchema),
  friendController.controllers.acceptFriendRequest
);

router.post(
  "/reject-request",
  validator.body(friendRequestDecisionSchema),
  friendController.controllers.rejectFriendRequest
);

module.exports = router;
