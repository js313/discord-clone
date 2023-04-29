const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const { verifyToken } = require("./middlewares/auth");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

const PORT = process.env.PORT || 5002;

const socketServer = require("./socketServer");
const server = http.createServer(app);
socketServer.registerSocketServer(server);

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use(verifyToken);
app.use("/api/friends", require("./routes/friendRoutes"));
app.use("/api/chat", require("./routes/chatRoutes"));
app.use("/api/group", require("./routes/groupRoutes"));

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
