const mysql = require('mysql');
const config = require('./config');

// creating a database connection
const database = mysql.createConnection(config.userAccess);

//connecting to database;
database.connect(err => {
  if (err) console.log(err.message);
});

// getting the url and title of post;
getTitleAndUrl = (pageName, numberOfRow) => {
  return new Promise((res, rej) => {
    if (pageName === '' || pageName === null)
      rej(new Error('Please Enter page Name'));
    let query =
      'SELECT `page_title`,`post_url`,`post_id` FROM `' +
      `${pageName}` +
      '` ORDER BY `post_id` DESC';
    if (numberOfRow != null) {
      // changing the query statement if the row is present
      query =
        'SELECT `page_title`,`post_url`,`post_id` FROM `' +
        `${pageName}` +
        '` ORDER BY `post_id` DESC LIMIT ' +
        `${parseInt(numberOfRow)}` +
        '';
    }
    console.log(query);
    // querying the database
    database.query(query, (err, result, fields) => {
      if (err) rej(err);
      console.log(result);
      // returning the result
      res(result);
    });
  });
};

// gettingSpecificPost;
getSpecificPost = (id, pageName) => {
  return new Promise((res, rej) => {
    if (id === null) return rej(new Error('Please enter Id'));
    if (pageName === null || pageName === '')
      rej(new Error('please enter pageName'));
    let query =
      'SELECT * FROM `' + `${pageName}` + '` WHERE `post_id`=' + `${id}` + ' ';
    database.query(query, (err, result, fields) => {
      if (err) rej(err);
      console.log(result);
      res(result);
    });
  });
};

module.exports = { getTitleAndUrl, getSpecificPost };
