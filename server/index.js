"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const travelRoute = require("./routes/travel");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("The API is working");
});

app.use("/api/v1/travels", travelRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
