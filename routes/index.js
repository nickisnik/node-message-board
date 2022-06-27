const express = require('express');
const index = express.Router();


const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
 ];

index.get('/', (req, res) => {
    res.render('index', { messages: messages })
});

index.get('/new', (req, res) => {
    res.render('form')
})

index.post('/new', (req, res) => {
    const message = req.body;
    messages.push({text: message.body, user: message.author, added: new Date()});
    res.redirect('/')
})

module.exports = index;