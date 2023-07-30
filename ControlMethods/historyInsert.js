const historySchema = require("../Models/historySchema");

function historyInsert(date, logInTime, logOutTime, res) {
  const hisModel = new historySchema({
    date: date,
    logIn: logInTime,
    logOut: logOutTime,
  });
  try {
    hisModel.save();
    res.send(true);
  } catch (error) {
    console.error(`error occured while saving...\n ${error}`);
  }
}

module.exports = historyInsert;
