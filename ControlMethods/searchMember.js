async function searchMember(fingerPrint, members, currentTime, date) {
  const data = await members.find({ name: fingerPrint }).toArray();

  const history = data.length !== 0 ? data[0].history : "notRegistered";

  if (history === "notRegistered") {
    return false;
  } else {
    if (history.length == 0) {
      history.push({
        date: date,
        loginTime: currentTime,
        logoutTime: "inLab",
      });
      try {
        await members.updateOne(
          { name: fingerPrint },
          { $push: { history: history[history.length - 1] } }
        );
      } catch (err) {
        console.log(err);
      }
    } else if (history[history.length - 1].logoutTime == "inLab") {
      try {
        await members.updateOne(
          { name: fingerPrint },
          {
            $set: {
              [`history.${history.length - 1}.logoutTime`]: currentTime,
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      history.push({
        date: date,
        loginTime: currentTime,
        logoutTime: "inLab",
      });
      try {
        await members.updateOne(
          { name: fingerPrint },
          { $push: { history: history[history.length - 1] } }
        );
      } catch (err) {
        console.log(err);
      }
    }
  }
}
module.exports = searchMember;
