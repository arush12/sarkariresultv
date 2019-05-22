const express = require('express');
const database = require('../database');
const router = express.Router();

// getting the url and pageTittle
router.get('/', (req, res) => {
  // getting the url and string if number of request definded;
  queryParam = req.query.NoR;
  if (queryParam !== null) {
    let numberOfimportant = queryParam;
    console.log(numberOfimportant);
    database
      .getTitleAndUrl('important', numberOfimportant)
      .then(data => {
        res.send(data);
      })
      .catch(err => console.log(err.message));
  }
  // getting all url and title if the important number is not defined
  else {
    database
      .getTitleAndUrl('important')
      .then(data => {
        res.send(data);
      })
      .catch(err => console.log(err.message));
  }
});
// getting the single Post
router.get('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  if (id === NaN) res.send.err('id is not a number');

  database
    .getSpecificPost(id, 'important')
    .then(data => res.send(data))
    .catch(err => res.send.err(err.message));
});
// getting singlepost if title is present
router.get('/:id/:title', (req, res) => {
  let id = parseInt(req.params.id);
  if (id === NaN) res.send.err('id is not a number');

  database
    .getSpecificPost(id, 'important')
    .then(data => res.send(data))
    .catch(err => res.send.err(err.message));
});

module.exports = router;
