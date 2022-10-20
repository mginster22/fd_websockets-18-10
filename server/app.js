const express = require("express");
const app = express();

const { Message } = require("./models");
const MessageController = require("./controllers/message.controller");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", MessageController.getAllMessage);

app.use((err, req, res, next) => {
  console.log("err:", err);
  res.status(500).send("server error" + err.message);
});
module.exports = app;
