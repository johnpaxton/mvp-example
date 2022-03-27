var express = require('express');
var router = express.Router();
var booksRouter = require('./books');

router.use('/books', booksRouter);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Generic api handler');
});

module.exports = router;
