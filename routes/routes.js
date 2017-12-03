var express = require('express');//web app framework for nodejs
var passport = require('passport');//
var Account = require('../models/userAccount');//requiring Account model
var Message = require('../models/message');//requiring Message model
var bodyParser = require('body-parser');//extracts the entire body portion body portion of an incoming request stream
// and exposes it on req.body as something easier to interface with
var mongoose = require('mongoose');

var ObjectId = require('mongodb').ObjectID;

//requiring for file with Java Script functions
var greetings = require("../javascript/functions");

//this block is new added
//so that dont need to use express.Router();
var router = express();

var path = require('path');//provides utilities for working with file and directory paths

router.set('views', path.join(__dirname, '../views'));//setting path to views folder
router.set('view engine', 'jade');
//router.use(express.static(path.join(__dirname, '../public')));


router.get('/', (req, res) => {

    res.render('index', { user : req.user });

}); 

//var result = greetings.checkUserNames("Jonaitis");
//get for register view
router.get('/register', (req, res) => {
    res.render('register', { });
});

//post for register view
router.post('/register', (req, res, next) => {

    var result = greetings.checkUserNames(req.body.username);
    if(result)
    {
        Account.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
            if (err) {
              return res.render('register', { error : err.message });
            }
    
            passport.authenticate('local')(req, res, () => {
                req.session.save((err) => {
                    if (err) {
                        return next(err);
                    }
                    //redirects to '/' and if user already logged in
                    //then it shows loged in view
                    res.redirect('/');
                });
            });
        });
    }

    else {
        res.render('index', { user : req.user });
    }


   
});



module.exports = router;