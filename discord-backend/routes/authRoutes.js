const express = require("express");
const authControllers = require("../controllers/auth/authControllers");
const router = express.Router();

const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(20).required(),
  email: Joi.string().email().required(),
});

router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.controllers.postRegister
);

router.post("/login", authControllers.controllers.postLogin);

module.exports = router;
