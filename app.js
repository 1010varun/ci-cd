const express = require("express");
const app = express();


app.get("/get", (req, res) => {
  res.json({
    message: "this is a cicd pipeline  setup",
    status: 200,
  });
});

app.listen(5000, () => {
  console.log("port is listening to port 5000");
});
