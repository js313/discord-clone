const jwt = require("jsonwebtoken");

const verifySocketToken = (socket, next) => {
  const token = socket.handshake.auth?.token;
  if (!token) {
    return next(new Error("Authentication error"));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded;
  } catch (error) {
    return next(new Error("Authentication error"));
  }
  next();
};

module.exports = verifySocketToken;
