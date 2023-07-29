const express = require("express");
const router = express.Router();
const historySchema = require("../Models/historySchema");

function historyHandler(date, logInTime, logOutTime, res) {
  const hisModel = new historySchema({
    history: {
      date: date,
      logIn: logInTime,
      logOut: logOutTime,
    },
  });
  try {
    hisModel.save();
    res.send(true);
  } catch (error) {
    console.error(`error occured while saving...\n ${error}`);
  }
}
router.post("/", (req, res) => {
  //finger print data handler
  const fingerPrintKey = req.body.fingerKey;
  //testing the searching opearation
});
