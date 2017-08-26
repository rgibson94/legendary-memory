/*
*   hashing.js
*   rgibson94
*   Created on: 2017-08-14
*   Description: Toolset for hashing utilizing Argon2i from the node-sodium
*   package. Argon2i is a memory-hard hashing algoritihm which is the current
*   winner of the password hashing competition.
*
*/

var NaCl = require('node-sodium');

//  Useful variables
var OS_LIMIT = NaCL.crypto_pwhash_argon2i_OPSLIMIT_INTERACTIVE;
var MEM_LIMIT = NaCL.crypto_pwhash_argon2i_MEMLIMIT_INTERACTIVE;
var SALT_SIZE = NaCL.crypto_pwhash_argon2i_SALTBYTES;
