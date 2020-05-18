const express = require('express');
// const mongojs = require('mongojs');
const logger = require('morgan');
// const path = require('path');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true });

// requiring routes
require('./routes/html-routes')(app);
// require('./routes/api-routes')(app);

app.listen(3000, () => {
  console.log(`Fitness Tracker running at http://localhost:${PORT}!`);
});
