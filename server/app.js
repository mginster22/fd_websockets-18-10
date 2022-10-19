const express = require("express");
const app = express();

const { Message } = require("./models");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", async (req, res, next) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).send({ data: messages });
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.log("err:", err);
  res.status(500).send("server error" + err.message);
});
module.exports = app;
