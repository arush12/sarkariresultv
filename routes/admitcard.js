const express = require('express');
const database = require('../database');
const router = express.Router();

// getting the url and pageTittle
router.get('/', (req, res) => {
  // getting the url and string if number of request definded;
  queryParam = req.query.NoR;
  if (queryParam !== null) {
    let numberOfadmitcard = queryParam;
    console.log(numberOfadmitcard);
    database
      .getTitleAndUrl('admitcard', numberOfadmitcard)
      .then(data => {
        res.send(data);
      })
      .catch(err => console.log(err.message));
  }
  // getting all url and title if the admitcard number is not defined
  else {
    database
      .getTitleAndUrl('admitcard')
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
    .getSpecificPost(id, 'admitcard')
    .then(data => res.send(data))
    .catch(err => res.send.err(err.message));
});
// getting singlepost if title is present
router.get('/:id/:title', (req, res) => {
  let id = parseInt(req.params.id);
  if (id === NaN) res.send.err('id is not a number');

  database
    .getSpecificPost(id, 'admitcard')
    .then(data => res.send(data))
    .catch(err => res.send.err(err.message));
});

module.exports = router;
