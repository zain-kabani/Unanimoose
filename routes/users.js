const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// var formidable = require('formidable')


// Register
router.post('/register', (req, res, next) => {

  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  User.getUserByEmail(newUser.email, (err, user) => {
    if (err) throw err;
    if (user) {
      return res.json({
        success: false,
        msg: 'User already exists'
      });
    } else {
      User.addUser(newUser, (err, user) => {
        if (err) {
          console.log(err)
          return res.json({
            success: false,
            msg: 'Failed to register user'
          })
        } else {
          return res.json({
            success: true,
            msg: 'User registered'
          })
        }
      })
    }
  });


});


// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  //console.log(req.body.username + " " + password)
  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    } else {
      if (user.password == password) {
        return res.json({
          success: true,
          msg: 'User found, and valid password'
        });
      } else {
        return res.json({
          success: false,
          msg: 'User found, but not a valid password'
        });
      }

    }
  });
});

// Profile
router.post('/profile', (req, res, next) => {
  const email = req.body.email;
  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    } else {
      return res.json({
        success: true,
        msg: 'User found',
        user: user
      })
    }
  })
});

// router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
//
//   res.json({
//     user: req.user
//   });
// });

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
