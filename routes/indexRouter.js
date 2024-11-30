const {Router} = require('express');
const {getMessages,postMessage} = require('../controllers/indexController');
const {links} = require('../consts');

const indexRouter = Router();

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

indexRouter.get('/', getMessages);

indexRouter.get('/new', (req,res) => res.render('form', {links: links}));

indexRouter.post('/new', postMessage);

module.exports = indexRouter;