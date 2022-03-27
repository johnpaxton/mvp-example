var express = require('express');
var router = express.Router();
const Book = require('../orm/books/Book');

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    console.error('Could not fetch GET /api/books');
    res.status(500).send('Could not GET /api/books');
  }
});

module.exports = router;
