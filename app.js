//list of dependencies
var express = require('express');//web app framework for nodejs
var path = require('path');//provides utilities for working with file and directory paths 
var morgan = require('morgan');//logs incoming requests to the console
var cookieParser = require('cookie-parser'); //will parse the Cookie header and handle cookie separation and encoding
var bodyParser = require('body-parser');//extracts the entire body portion body portion of an incoming request stream
//dependencies concerning registering and log in
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy; //strategy for authentication with username and password
var flash = require('connect-flash');//used to display flash messages f.x. if user entered wrong password

var mongoose = require('mongoose');

var ObjectId = require('mongodb').ObjectID;


var app = express();

app.listen(3000, function()
{
  console.log('Listening on port 3000');
});