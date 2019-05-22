const express = require('express');
const database = require('../database');
const router = express.Router();

// getting the url and pageTittle
router.get('/', (req, res) => {
  // getting the url and string if number of request definded;
  queryParam = req.query.NoR;
  if (queryParam !== null) {
    let numberOflatestjob = queryParam;
    console.log(numberOflatestjob);
    database
      .getTitleAndUrl('latestjob', numberOflatestjob)
      .then(data => {
        res.send(data);
      })
      .catch(err => console.log(err.message));
  }
  // getting all url and title if the latestjob number is not defined
  else {
    database
      .getTitleAndUrl('latestjob')
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
    .getSpecificPost(id, 'latestjob')
    .then(data => res.send(data))
    .catch(err => res.send.err(err.message));
});
// getting singlepost if title is present
router.get('/:id/:title', (req, res) => {
  let id = parseInt(req.params.id);
  if (id === NaN) res.send.err('id is not a number');

  database
    .getSpecificPost(id, 'latestjob')
    .then(data => res.send(data))
    .catch(err => res.send.err(err.message));
});
module.exports = router;
