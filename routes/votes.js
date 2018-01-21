const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Vote = require('../models/vote');
const Group = require('../models/group');

// var formidable = require('formidable')


// Register

// router.post('/spitUpTop3', (req, res, next) => {
//
// })

router.post('/create', (req, res, next) => {

  // let newGroup = new Group({
  //   name: req.body.name,
  //   list_of_invitees: req.body.email,
  //   password: req.body.password
  // })
  //
  // return res.json(
  //   {
  //     'success': false
  //   }
  // )
  // let newUser = new User({
  //   name: req.body.name,
  //   email: req.body.email,
  //   username: req.body.username,
  //   password: req.body.password,
  //   client_type: req.body.client_type,
  //   id: req.body.id
  // });
  // User.getUserByUsername(newUser.username, (err, user) => {
  //   if (err) throw err;
  //   if (user) {
  //     console.log(newUser.username)
  //     return res.json({
  //       success: false,
  //       duplicate: true,
  //       msg: 'User already exists'
  //     });
  //     console.log('dfds')
  //   } else {
  //     User.addUser(newUser, (err, user) => {
  //       if (err) {
  //         console.log(err)
  //         res.json({
  //           success: false,
  //           msg: 'Failed to register user'
  //         })
  //       } else {
  //         res.json({
  //           success: true,
  //           msg: 'User registered'
  //         })
  //       }
  //     })
  //   }
  // });
  //console.log("apple " + newUser.client_type)


});


// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  //console.log(req.body.username + " " + password)
  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({
          data: user
        }, config.secret, {
          expiresIn: 604800
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            client_type: user.client_type
          }
        });
      } else {
        return res.json({
          success: false,
          msg: 'Wrong password'
        });
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {

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
