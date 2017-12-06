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

var router = express();

var path = require('path');//provides utilities for working with file and directory paths

router.set('views', path.join(__dirname, '../views'));//setting path to views folder
router.set('view engine', 'jade');
router.use(express.static(path.join(__dirname, '../public')));
//router.use(express.static(path.join(__dirname, '../public')));


router.get('/', (req, res) => {

    res.render('login', { user : req.user });

}); 

//get for register view
router.get('/register', (req, res) => {
    res.render('register', { });
});

//post for register view
router.post('/register', (req, res, next) => {

    var userName = greetings.checkUserNames(req.body.username);
    var passwordContainsNumber = greetings.checkPasswords(req.body.password);
    var passwordContainsUpperCase = greetings.containsUpperCases(req.body.password);

    if(userName && passwordContainsNumber && passwordContainsUpperCase)
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
       
        res.render('register', { user : req.user });
    }
});

 //gets all messages written by logged in user
 router.get('/messages',(req , res) =>{
    Message.find({"username" : req.user.username}, function(err , i){
        if (err) return console.log(err)
       
        res.render('getMessages',{messages: i, user : req.user})  
     })
 });

 //gets important messages written by logged in user
router.get('/importantMessages',(req , res) =>{
    Message.find({"username" : req.user.username, "importance" : "Important"}, function(err , i){
        if (err) return console.log(err)

        res.render('getMessages',{messages: i, user : req.user})  
     })
 }); 

//gets not important messages written by logged in user
router.get('/notImportantMessages',(req , res) =>{
    Message.find({"username" : req.user.username, "importance" : "Notimportant"}, function(err , i){
        if (err) return console.log(err)

        res.render('getMessages',{messages: i, user : req.user})  
     })
 }); 

 //inserting message for user himself "GET"
router.get('/newMessage', (req, res) => {
    res.render('insertMessage', { user : req.user, user : req.user });
});


//inserting message for user himself "POST"
router.post('/newMessage',(req, res, next) => {
    var isMessageMax60 = greetings.maximum60Characters(req.body.content);
    var isNotEmpty = greetings.isNotEmpty(req.body.content);
if(isMessageMax60 && isNotEmpty)
{
   var message = new Message()
   message.username = req.body.username
   message.content = req.body.content
   message.importance = req.body.importance
   var dt1 = new Date();
   message.date = dt1
   message.save(req.body, function(err, data) {

    Message.find({"username" : req.user.username}, function(err, i) {
        if (err) return console.log(err) 

            res.render('getMessages', {messages: i, user : req.user})
    });
   }); 
}
   else {
    res.render('insertMessage', { user : req.user, user : req.user });
   }
});

router.get('/login', (req, res) => {
    res.render('login', { user : req.user, error : req.flash('error')});
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});


router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

//get view to send post to another user
router.get('/sendPost',(req , res) =>{
    Account.find(function(err , i){
        if (err) return console.log(err)

        res.render('sendPost',{accounts: i, user : req.user})  
     })
 });

//post method for sending post to another user
router.post('/sendPost',(req, res, next) => {
   // Message.save(new Message({username : req.body.username, content : req.body.content})
   var message = new Message()
   message.username = req.body.username
   message.content = req.body.content
   message.importance = req.body.importance
   var dt1 = new Date();
   message.date = dt1
   message.save(req.body, function(err, data) {
    //maybe insert here???
    Message.find({"username" : req.user.username}, function(err, i) {
        if (err) return console.log(err) 

            res.render('getMessages', {messages: i, user : req.user})
        
    });
   });
});  

router.delete('/messages/:id',(req , res) =>{
    
    console.log(req.params.id)
    
      Message.remove({"_id": ObjectId(req.params.id)}, function(err, result){
        if (err) {
          console.log(err);
        } 
    
      });
       
     });



module.exports = router;