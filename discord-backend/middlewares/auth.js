const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  let token = req.cookies || req.headers.authorization;
  token = token && token.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Unauthorized access",
    });
  }
};
