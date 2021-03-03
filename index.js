const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;

const vigenereKey = 'password'

app.listen(port, () => {
    console.log('Server starting on ' + port + ' port');
})
app.get('/encode/:word', (req, res) => {
    const word = req.params.word;
    const encryptWord = Vigenere.Cipher(vigenereKey).crypt(word)
    res.send(encryptWord)
})

app.get('/decode/:word', (req, res) => {
    const word = req.params.word;
    const decipherWord = Vigenere.Decipher(vigenereKey).crypt(word)
    res.send(decipherWord)
})

