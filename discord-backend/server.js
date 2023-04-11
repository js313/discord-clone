const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const { verifyToken } = require("./middlewares/auth");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/authRoutes"));

app.use(verifyToken);

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
