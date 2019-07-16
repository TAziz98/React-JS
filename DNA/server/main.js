var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
const JobRoutes = require('./JobOffer/JobRoutes')
const UserRoutes = require('./User/UserRoutes')

mongoose.connect('mongodb://Joboffer:test12@ds251507.mlab.com:51507/joboffers', { useNewUrlParser: true })

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));

app.use(JobRoutes);

app.use(UserRoutes)
 
app.listen(8081);
