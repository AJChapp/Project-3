const express = require("express");
// const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

const app = express();
const mongoose = require("mongoose");


// Initialize Express

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Use express.static to serve the public folder as a static directory

require("./Routes/controller.js")(app);

mongoose.connect("mongodb://localhost/project3");


app.listen(PORT, function () {

  console.log(`App running on port ${PORT}!`);
});