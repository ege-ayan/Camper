const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/camper");

const database = mongoose.connection;

database.on("error", console.error.bind(console, "connection error:"));
database.once("open", () => {
  console.log("Database Connected");
});

const seedDB = async () => {
  await Campground.deleteMany({});
  const c = new Campground({ title: "purple field" });
  await c.save();
};

seedDB();
