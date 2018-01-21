const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Group = require('../models/group');
const User = require('../models/user');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anonymoose1997123@gmail.com',
    pass: 'knucklesdragging'
  }
});


// Create group, requires the user email as a string
// requires name of the group
// Requires list of invitees as a list of strings of emails
router.post('/create', (req, res, next) => {

  owner_user = req.body.owner_user

  let newGroup = new Group({
    name: req.body.group_name,
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

      User.getUserByEmail(owner_user, (err, user) => {
        if (err) {
          return res.json({
            success: false,
            msg: "An error occured",
          })
        } else {
          user.group.push(group._id)
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
// Send invitees as a list of strings of emails of users with accounts called invitees
// also send the group ID as a string called group_id
router.post('/addMembers', (req, res, next) => {
  const invitees = req.body.list_of_invitees;
  const group_id = req.body.group_id;
  invitee_users = []

  for (var user of invitees) {
    User.getUserByEmail(user, (err, user_object) => {
      user_object.group.push(group_id)
      console.log(user_object)
      user_object.save((err, user) => {


        var mailOptions = {
          from: 'anonymoose1997123@gmail.com',
          to: 'zain.kabani97@gmail.com',
          subject: "You've been invited to hangout with your friends on Unanimoose!",
          text: 'unanimoose.com'
        };

        transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info);
            return res.json({
              success: true,
              msg: "Group ID added to the user group array, and email has been sent",
            })
          }
        });


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
// router.get('/', passport.authenticate('jwt', {
//   session: false
// }), (req, res, next) => {
//
//   res.json({
//     user: req.user
//   });
// });


router.post('/tester', (req, res, next) => {


  // let transporter = nodemailer.createTransport({
  //   host: 'smtp.ethereal.email',
  //   port: 587,
  //   auth: {
  //     user: 'izebyt7uvyjuvxf2@ethereal.email',
  //     pass: 'nfxGpZzc5AutMUgDpE'
  //   }
  // })
  //
  // var message = {
  //   from: 'izebyt7uvyjuvxf2@ethereal.email',
  //   to: 'zainkabster@gmail.com',
  //   subject: 'Message title',
  //   text: 'Plaintext version of the message',
  //   html: '<p>HTML version of the message</p>'
  // };
  //
  // // send mail with defined transport object
  // transporter.sendMail(message, (error, info) => {
  //   if (error) {
  //     return console.log(error);
  //   }
  //   console.log('Message sent: %s', info.messageId);
  //   // Preview only available when sending through an Ethereal account
  //   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  //
  // transporter.close();
  //
  //
  //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
  //   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  // });

})

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
