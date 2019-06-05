var express = require('express');
var router = express.Router();
var csrf = require('csurf');
router.use(csrf());
var passport = require('passport');

var Cart = require('../models/Cart');


router.get('/profile',isLoggedIn,function(req,res){
  if(!req.session.cart){
    res.render('user/profile',{courses:null});
  }
  var cart = new Cart(req.session.cart);
  res.render('user/profile',{courses:cart.generateArray(),totalPrice:cart.totalPrice});
  });
  
  
router.use('/',notLoggedIn,function(req,res,next){
next();
});
router.get('/signin', function(req, res, next) {
  var messages =req.flash('error');
  res.render('user/signin',{csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signin',passport.authenticate('local.signin',{
  failureRedirect: '/user/signin',
  failureFlash: true
}), function(req,res,next){
  if(req.session.oldUrl){
  var oldUrl =req.session.oldUrl;
  req.session.oldUrl=null;
res.redirect(oldUrl);
  }
  else{
    res.redirect('/user/profile');
  }
});

router.post('/signup', passport.authenticate('local.signup',{
failureRedirect: '/user/signup',
failureFlash: true
}), function(req,res,next){
  if(req.session.oldUrl){
  var oldUrl =req.session.oldUrl;
  req.session.oldUrl=null;
res.redirect(oldUrl);
  }
  else{
    res.redirect('/user/profile');
  }
  });


router.get('/signup',function(req,res){
  var messages =req.flash('error');
  console.log(req.flash('info').msg+" kkkkkk");
res.render('user/signup',{csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});


module.exports = router;

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/user/signin');
}

function notLoggedIn(req,res,next){
  if(!req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}