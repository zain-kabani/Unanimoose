const mongoose = require('mongoose');

//const config = require('../config/database');
//const Schema = mongoose.Scehma;

// User Schema
const VoteSchema = mongoose.Schema({
  group: Object
});

const Vote = module.exports = mongoose.model('Vote', VoteSchema);


module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByEmail = function(email, callback){
  //console.log({username: username})
  const query = {email: email}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  newUser.save(callback);
}
