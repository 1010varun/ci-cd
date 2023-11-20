const express = require("express");
const app = express();


app.get("/get", (req, res) => {
  res.json({
    message: "this is a cicd from new branch",
    status: 200,
  });
});

app.get("/success", (req, res) => {
  res.json({
    message: "this is second try to see cicd",
    status: 200,
  })
})

app.listen(5000, () => {
  console.log("port is listening to port 5000");
});
