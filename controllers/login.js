/*
*   login.js -- Controller
*   rgibson94
*   Created on: 2017-08-26
*/

exports.authenticate = function(req,res){
  res.json({
    "username":req.params.username,
    "password":req.params.password
  })
};
