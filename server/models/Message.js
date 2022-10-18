const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Message = mongoose.model("Message", messagesSchema);

module.exports = Message;
