const express = require("express");
const mongoose = require("mongoose");

// start app
const app = express();

// start database
mongoose.connect("mongodb://localhost:27017/nodeapi", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

// import a mongo model
require('./src/models/Product');

// first route
app.get("/", (req, res) => {
  res.send("Hello World man!");
});

app.listen(3001);
