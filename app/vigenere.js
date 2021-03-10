const express = require("express");
const router = express.Router();
const Vigenere = require("caesar-salad").Vigenere;

const vigenereKey = "password";

router.get("/encode/:word", (req, res) => {
  const word = req.params.word;
  const encryptWord = Vigenere.Cipher(vigenereKey).crypt(word);
  res.send(encryptWord);
});

router.get("/decode/:word", (req, res) => {
  const word = req.params.word;
  const decipherWord = Vigenere.Decipher(vigenereKey).crypt(word);
  res.send(decipherWord);
});

module.exports = router;
