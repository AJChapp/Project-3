const express = require("express");
const PORT = process.env.PORT || 8080;
const routes =require("./Routes/controller.js")
const app = express();
const mongoose = require("mongoose");


// Initialize Express

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Use express.static to serve the public folder as a static directory

mongoose.connect("mongodb://localhost/project3");

routes(app);


app.listen(PORT, function () {

  console.log(`App running on port ${PORT}!`);
});