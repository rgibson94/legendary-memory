/*
*   hashing.js
*   rgibson94
*   Created on: 2017-08-14
*   Description: Toolset for hashing utilizing Argon2i from the node-sodium
*   package. Argon2i is a memory-hard hashing algoritihm which is the current
*   winner of the password hashing competition.
*
*/

var NaCl = require('sodium').api;
var crypto = require('crypto');

//  Useful variables
var OS_LIMIT = NaCl.crypto_pwhash_argon2i_OPSLIMIT_INTERACTIVE;
var MEM_LIMIT = NaCl.crypto_pwhash_argon2i_MEMLIMIT_INTERACTIVE;
var SALT_SIZE = NaCl.crypto_pwhash_SALTBYTES;

// Genearte a Random Salt of SALT_SIZE
var genSalt = function(){
  console.log(SALT_SIZE);
  crypto.randomBytes(SALT_SIZE, function(err, buffer){
        if(err){
            console.error(err);
        }
        else{
            if(buffer.length != SALT_SIZE){
                console.error('Salt generation failed: Inncorrect length.');
            }
            else{
              console.log(buffer.toString('hex'));
                return buffer.toString('hex');
            }
        }
    })
};

exports.genSalt = genSalt;
