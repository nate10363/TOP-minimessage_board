const messages = [
  {
    text: "Hi there!",
    user: "Amanda",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Where is cookie",
    user: "Tootsie",
    added: new Date(),
  },
]

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: "Mini Messageboard",
    messages: messages,
   });
});

// /new route
router.get('/new', function(req, res) {
  res.render('form');
});

// post form
router.post('/new', function(req, res) {
  messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
  res.redirect('/');
})

module.exports = router;
