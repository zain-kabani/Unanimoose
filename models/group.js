const mongoose = require('mongoose');
const config = require('../config/database');

const GroupSchema = mongoose.Schema({

  name : {
    type: String,
    required: true
  },
  list_of_invitees: {
    type: [String],
    default: []
  },
  list_of_users: {
    type: [],
    default: []
  },
  state: {
    type: Boolean
  },
  total_responses: {
    type: Number,
    default: 0
  }

});

// const imageTestSchema = mongoose.Schema({
//   img: { data: Buffer, contentType: String }
// })

const Group = module.exports = mongoose.model('Group', GroupSchema);

module.exports.publishGroup = function(group, callback){
  //console.log('wete')
    group.save(callback);
}

module.exports.getUsersListings = function(username, callback){
  //console.log({username: username})
  const query = {owner: username}
  Listing.find(query, callback);
}

module.exports.getGroupById = function(id, callback){
  Group.findById(id, callback);
}

module.exports.getQueryListings = function(city, callback){
  //console.log({username: username})
  const query = {"address.city" : city}

  Listing.find(query, callback);
}
