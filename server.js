const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir")

// start app
const app = express();

// start database
mongoose.connect("mongodb://localhost:27017/nodeapi", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

// import all mongo models
requireDir('./src/models');

// first route
app.get("/", (req, res) => {
  res.send("Hello World man!");
});

app.listen(3001);
