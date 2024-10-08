const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (request, response) => {
  response.render("home");
});

app.listen(3000, () => {
  console.log("Express Server running on port 3000");
});
