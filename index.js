const express = require("express");
const app = express();

//middlewares
app.use(express.json());
//Global variables
const serverPort = 5000;

app.use("/auth", require("./Routes/"));

app.listen(serverPort, function () {
  console.log(`server has been started @ ${serverPort}`);
});
