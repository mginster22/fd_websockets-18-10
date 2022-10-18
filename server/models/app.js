const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(500).send("server error" + err.message);
});
module.exports = app;
