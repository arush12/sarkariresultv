const express = require('express');
const database = require('../database');
const router = express.Router();

// getting the url and pageTittle
router.get('/', (req, res) => {
  // getting the url and string if number of request definded;
  queryParam = req.query.NoR;
  if (queryParam !== null) {
    let numberOfResult = queryParam;
    console.log(numberOfResult);
    database
      .getTitleAndUrl('result', numberOfResult)
      .then(data => {
        res.send(data);
      })
      .catch(err => console.log(err.message));
  }
  // getting all url and title if the result number is not defined
  else {
    database
      .getTitleAndUrl('result')
      .then(data => {
        res
          .header({
            RequestMethod: 'GET',
            'content-type': 'application/json',
            status: 200
          })
          .send(data);
      })
      .catch(err => console.log(err.message));
  }
});
// getting the single Post
router.get('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  if (id === NaN) res.send.err('id is not a number');

  database
    .getSpecificPost(id, 'result')
    .then(data =>
      res
        .header({
          RequestMethod: 'GET',
          'content-type': 'application/json',
          status: 200
        })
        .send(data)
    )
    .catch(err => res.send(err.message));
});
// getting singlepost if title is present
router.get('/:id/:title', (req, res) => {
  let id = parseInt(req.params.id);
  if (id === NaN) res.send('id is not a number');

  database
    .getSpecificPost(id, 'result')
    .then(data =>
      res
        .header({
          RequestMethod: 'GET',
          'content-type': 'application/json',
          status: 200
        })
        .send(data)
    )
    .catch(err => res.send(err.message));
});

module.exports = router;
