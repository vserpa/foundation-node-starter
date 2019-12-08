const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// start app
const app = express();
app.use(express.json());
app.use(cors());

// start database
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// import all mongo models
requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(3001);
