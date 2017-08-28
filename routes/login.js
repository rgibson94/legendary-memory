/*
*   login.js -- route
*   rgibson94
*   Created on: 2017-08-26
*/

// Import Express
var express = require('express');

// Import Controller
var login = require('../controllers/login');

// Prepare Exports
module.exports = function () {
    // Create the router
    var router = express.Router();

    // GET login
    router.get('/login/:username/:password', login.authenticate);

    // Return the router
    return router;
}
