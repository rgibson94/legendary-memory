/*
*   server.js
*   rgibson94
*   Created on: 2017-08-26
*   Description: Express server instance
*/

var express = require('express');
var morgan = require('morgan');

var config = require('./config.js');

var login = require('./routes/login.js')
var hash = require('./routes/hash.js');

// Set the port
var port = process.env.PORT || config.port;

const app = express()

// Use morgan to log requests to the console
app.use(morgan('dev'));

app.use('/', login());

app.use('/', hash());

app.listen(port, function () {
  console.log('%s - %s listening on %s', process.pid,'legendary-memory', port);
})
