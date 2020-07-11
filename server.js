const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const db = require("../models/workout.js");
const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//Connect to the Mongo DB
mongoose.connect(MONGODB_URI)



// routes
app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api.js"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
