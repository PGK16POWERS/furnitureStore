const express = require("express");
const app = express();
const path = require("path");


app.use(express.static("public/furniture-store"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "furniture-store/index.html"));
});

app.listen(4500, () => {
  console.log("dankie supreme");
});
