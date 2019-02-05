const express = require('express');
const session = require('./auth/sessions');
const app = express();
const bodyParser = require('body-parser');
const passport = require('./auth/passportInit');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session object for storing sessions in redis
app.use(session);

// bootstrap passport for authentication and validation
passport(app);

require('./merchant')(app);

// Exporting app for server
module.exports = app;