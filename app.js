const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campground");

mongoose.connect("mongodb://localhost:27017/camper");

const database = mongoose.connection;
database.on("error", console.error.bind(console, "connection error:"));
database.once("open", () => {
  console.log("Database Connected");
});

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (request, response) => {
  response.render("home");
});

app.get("/makecampground", async (request, response) => {
  const camp = new Campground({ title: "Test ", description: "Test Message" });
  await camp.save();
  response.send(camp);
});

app.listen(3000, () => {
  console.log("Express Server running on port 3000");
});
