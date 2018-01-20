const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Group = require('../models/group');
const User = require('../models/user');

// var formidable = require('formidable')


// Create group, requires the user as well
// Requires list of invitees as a list of strings of emails
router.post('/create', (req, res, next) => {

  owner_user = req.body.owner_user

  console.log(req.body)
  let newGroup = new Group({
    name: req.body.name,
    list_of_invitees: req.body.list_of_invitees,
    list_of_users: [owner_user],
    state: 0,
    total_responses: 0

  })

  Group.publishGroup(newGroup, (err, group) => {
    if (err) {
      console.log(err)
      return res.json({
        success: false,
        msg: "An error occured"
      })
    } else {


      User.getUserByEmail(owner_user.email, (err, user) => {
        if (err) {
          return res.json({
            success: false,
            msg: "An error occured",
          })
        } else {
          console.log(user)
          user.group.push(group.id)
          console.log(user)
          user.save((err, user) => {
            return res.json({
              success: true,
              msg: "Group ID added to the user group array",
            })
          })
        }

        // return res.json({
        //     success: true,
        //     msg: "Listing published successfully",
        //     group: group
        // })
      })
    }

  })

});


// Add members
// Send invitees as a list of strings of emails of users with accounts
// also send the group as an object
router.post('/addMembers', (req, res, next) => {
  const invitees = req.body.invitees;
  const group_id = req.body.group_id;
  invitee_users = []

  for (var user of invitees) {
    User.getUserByEmail(user, (err, user_object) => {
      user_object.group.push(group_id)
      console.log(user_object)
      user_object.save((err, user) => {
        return res.json({
          success: true,
          msg: "Group ID added to the user group array",
        })
      })
    })
  }

  // Group.getGroupById(group_id, (err, group) => {
  //   group
  // })

  // //console.log(req.body.username + " " + password)
  // User.getUserByUsername(username, (err, user) => {
  //   if (err) throw err;
  //   if (!user) {
  //     return res.json({
  //       success: false,
  //       msg: 'User not found'
  //     });
  //   }
  //
  //   User.comparePassword(password, user.password, (err, isMatch) => {
  //     if (err) throw err;
  //     if (isMatch) {
  //       const token = jwt.sign({
  //         data: user
  //       }, config.secret, {
  //         expiresIn: 604800
  //       });
  //
  //       res.json({
  //         success: true,
  //         token: 'JWT ' + token,
  //         user: {
  //           id: user._id,
  //           name: user.name,
  //           username: user.username,
  //           email: user.email,
  //           client_type: user.client_type
  //         }
  //       });
  //     } else {
  //       return res.json({
  //         success: false,
  //         msg: 'Wrong password'
  //       });
  //     }
  //   });
  // });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {

  res.json({
    user: req.user
  });
});

// router.get('/testerthingy', (req, res, next) => {
//
//   var form = new formidable.IncomingForm();
//   form.parse(req, function(err, field, file) {
//
//     console.log(field)
//
//   })
//
// })



module.exports = router;
