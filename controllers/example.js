// create a router to help control our endpoints
const router = require("express").Router();
// import our model to add new entries into our database
const { Example } = require("../models");

// new endpoint for the post action at the /new route
router.post("/new", async (req, res) => {
  try {
    // create an object that is a new instance of the Example class, which will be added to the database
    const example = new Example({
      example: "Testing if this works",
    });

    // save the new item into the database, and create a variable with the information stored within it
    const newExample = await example.save();

    // send back a successful response, containing a message about the new itemn being created as well as the item that was made
    res.status(200).json({
      example: newExample,
      message: "New Example Input!",
    });
  } catch (e) {
    // if something goes wrong, send an error with that message
    res.status(500).json({
      ERROR: e.message,
    });
  }
});

module.exports = router;
