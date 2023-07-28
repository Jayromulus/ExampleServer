// import the mongoose tool to create a database schema
const mongoose = require("mongoose");

// Create a schema, meaning a map of what our data will look like in the database
const ExampleSchema = new mongoose.Schema({
  exampleData: {
    type: String,
    require: true,
  },
});

// export a mongoose model with the name "example" based on the schema we have created named ExampleSchema
module.exports = mongoose.model("example", ExampleSchema);
