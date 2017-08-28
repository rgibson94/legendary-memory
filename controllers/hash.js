/*
*   hash.js -- Controller
*   rgibson94
*   Created on: 2017-08-26
*/

var hashing = require('../hashing.js')

exports.argon2 = function(req,res){
  res.json({
    "toHash":req.params.to_hash,
    "Salt":hashing.genSalt()
  })
};
