const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  logIn: {
    type: String,
    required: true,
  },
  logOut: {
    type: String,
    required: true,
  },
});
module.exports = historySchema;
