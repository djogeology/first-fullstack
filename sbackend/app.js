const express = require('express');
const cors=require('cors');

//Create an Express App
const app = express();


//Require application Route modules
const classesRoute = require('./routes/classes');
const teachersRoute = require('./routes/teachers');
const studentRoute = require('./routes/student');

//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api/classes', classesRoute);
app.use('/api/teachers', teachersRoute);
app.use('/api/student', studentRoute);

module.exports = app; // export the express app.