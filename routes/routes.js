var express = require('express');//web app framework for nodejs
var passport = require('passport');//
var Account = require('../models/userAccount');//requiring Account model
var Message = require('../models/message');//requiring Message model
var bodyParser = require('body-parser');//extracts the entire body portion body portion of an incoming request stream
// and exposes it on req.body as something easier to interface with
var mongoose = require('mongoose');

var ObjectId = require('mongodb').ObjectID;
//const router = express.Router();

//this block is new added
//so that dont need to use express.Router();
var router = express();

var path = require('path');//provides utilities for working with file and directory paths

router.set('views', path.join(__dirname, '../views'));//setting path to views folder
router.set('view engine', 'jade');
//router.use(express.static(path.join(__dirname, '../public')));



//
router.get('/', (req, res) => {

    res.render('index', { user : req.user });

}); 

module.exports = router;