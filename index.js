//Initialize .env variables
require("dotenv").config();

// Destructured import of variables from .env file
const { PORT, CONNECTION_STRING } = process.env;

// Create base variables required for the rest of this application
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// Import our controllers
const { exampleController } = require("./controllers");

// Conenct to MongoDB (this is currently using Compass for a local db); then create a local variable to interact with it
mongoose.connect(CONNECTION_STRING);
const db = mongoose.connection;

// Print to the console once we are connected to the database
db.once("open", () => console.log("Connected to Example database"));

// Allows our application to read JSON information sent to us
app.use(express.json());

// Tell our app to use our controllers, think of this like calling a function, it will be used at the /example endpoint
app.use("/example", exampleController);

// Run our app, with it listening on the port we have provided in the .env file, then print a message saying we are listening
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
