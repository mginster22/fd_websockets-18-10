const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
// const { basename } = require("path");

const config = require("../configs").db[process.env.NODE_ENV || development];

mongoose.connect(
  `mongodb://${config.hostName}:${$config.port}/${config.dbName}`
);
const basename = path.basename(__filename);

const db = {};

fs.readFileSync(__dirname)
  .filter((file) => file !== basename && /.js$/i.test())
  .forEach((file) => {
    const model = require(path.resolve(__dirname, file));
    db[model.modelName] = model;
  });
module.exports = db;
