const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const cors = require('cors');


// Connect To Database
// mongoose.connect(config.database, { useMongoClient: true });
mongoose.connect(config.database, {  });


// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();

const users = require('./routes/users');
const groups = require('./routes/groups');
const availabilities = require('./routes/availabilities');



// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());


// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/groups', groups);
app.use('/availabilities', availabilities);


// Index Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/front-end/production/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+ port);
});
