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

const Product = mongoose.model("Product");

// first route
app.get("/", (req, res) => {
  Product.create({
    title: "React Native",
    description: "Build native apps with React",
    url: "http://github.com/facebook/react-native"
  })
  return res.send("Hello World!");
});

app.listen(3001);
