const express = require("express");
const app = express();
const DBconnect = require("./DBconnect");
DBconnect();
app.use(express.json());
app.use("/post", require("./routes/postRouter"));

app.listen("5000", (err) => {
  err ? console.log(err) : console.log(`server is running on port 5000`);
});
