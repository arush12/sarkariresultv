const express = require('express');
const app = express();
const cors = require('cors');
const result = require('./routes/result');
const syllabus = require('./routes/syllabus');
const admission = require('./routes/admission');
const admitcard = require('./routes/admitcard');
const latestjob = require('./routes/latestjob');
const important = require('./routes/important');
const answerkey = require('./routes/answerkey');
const helmet = require('helmet');
const compression = require('compression');

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());

// configuring the routs
app.use('/result', result);
app.use('/syllabus', syllabus);
app.use('/admission', admission);
app.use('/answerkey', answerkey);
app.use('/admitcard', admitcard);
app.use('/important', important);
app.use('/latestjob', latestjob);

app.listen(3000, 'localhost', () => console.log('Listining on Port 3000'));
