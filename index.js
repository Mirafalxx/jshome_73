const express = require("express");
const cors = require("cors");
const vigenere = require("./app/vigenere");
const app = express();
const port = 8000;
app.use(cors());

app.use("/vigenere", vigenere);
app.listen(port, () => {
  console.log("Server starting on " + port + " port");
});
