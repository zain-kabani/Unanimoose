const mongoose = require('mongoose');

//const config = require('../config/database');
//const Schema = mongoose.Scehma;

// User Schema
const AvailabilitySchema = mongoose.Schema({
  group: Object
});

const Availability = module.exports = mongoose.model('Availability', AvailabilitySchema);


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
