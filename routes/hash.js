/*
*   hash.js -- route
*   rgibson94
*   Created on: 2017-08-26
*/

// Import Express
var express = require('express');

// Import Controller
var hash = require('../controllers/hash');

// Prepare Exports
module.exports = function () {
    // Create the router
    var router = express.Router();

    // GET hash
    router.get('/hash/:to_hash', hash.argon2);

    // Return the router
    return router;
}
