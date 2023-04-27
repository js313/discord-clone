const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    // check if user already exists
    const user = await User.findOne({ email: email.toLowerCase() });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create new user
    const newUser = new User({
      username,
      password: hashedPassword,
      email: email.toLowerCase(),
      imageBackground: "#" + Math.floor(Math.random() * 16777215).toString(16),
    });
    // save user to db
    await newUser.save();
    // generate token
    const token = jwt.sign(
      {
        id: newUser._id,
        email: newUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    // send response
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        token,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = postRegister;
