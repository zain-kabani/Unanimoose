const mongoose = require('mongoose');

//const config = require('../config/database');
//const Schema = mongoose.Scehma;

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  group: {
      type: [],
      default: []
  }
});

const User = module.exports = mongoose.model('User', UserSchema);


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
