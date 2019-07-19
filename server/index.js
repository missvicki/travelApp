const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("The API is working");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
