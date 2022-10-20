const { Message } = require("../models");

module.exports.getAllMessage = async (req, res, next) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 });
    res.status(200).send({ data: messages });
  } catch (error) {
    next(error);
  }
};
