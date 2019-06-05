var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Courses = require('../models/courses');
var Cart = require('../models/Cart');
/* GET home page. */

router.get('/get-course/:title',isLoggedIn,function(req,res){
  var title = req.params.title;
  Courses.findOne({'Title':title}, function(err,course){
    if(err){
        throw err;
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    course.moneyDescription ==='FREE ' ? res.redirect(course.courseUrl) : res.render('checkout',{total:cart.totalPrice,errMsg:errMsg,noErrors:!errMsg});
    });
});

  router.get('/logout',isLoggedIn,function(req,res){
    req.logout();
    res.redirect('/');
  });

  router.get('/reduce-item/:id',isLoggedIn,function(req,res,next){
    var courseId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.reduce(courseId);
    req.session.cart = cart;
    res.redirect('/user/profile');
   });
   
   router.get('/removeAll/:id',isLoggedIn,function(req,res,next){
    var courseId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.removeAll(courseId);
    req.session.cart = cart;
    res.redirect('/user/profile');
   });
  router.get('/checkout',isLoggedIn,function(req,res){
    if(!req.session.cart ){
      res.redirect('/user/profile');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    if(cart.totalQty <=0){
      res.redirect('/user/profile');
    }
    else{   
    res.render('checkout',{total:cart.totalPrice,errMsg:errMsg,noErrors:!errMsg});
    }
  });
  router.post('/checkout',function(req,res,next){
    if(!req.session.cart ){
      res.redirect('/user/profile');
    }
    var cart = new Cart(req.session.cart);
    var stripe = require("stripe")(
      "sk_test_k31TPlJEQ5KHUyQmHWx545Ct"
  );

  stripe.charges.create({
      amount: cart.totalPrice * 100,
      currency: "usd",
      source: req.body.stripeToken, // obtained with Stripe.js
      description: "Test Charge"
  }, function(err, charge) {
      if (err) {
          req.flash('error', err.message);
          return res.redirect('/checkout');
      }
      req.flash('success', 'Successfully paid course');
      req.session.cart = null;
      res.redirect('/courses')
  });
});
  router.get('/courses', function(req, res, next) {
    var successMsg = req.flash('success')[0];
    var courses = Courses.find(function(err,result){
      var coursesArray = [];
      var coursesChunkSize = 3;
      for(var i=0;i<result.length;i+=coursesChunkSize){
        coursesArray.push(result.slice(i,i+coursesChunkSize));
      }
    res.render('pages/courses',{courses:coursesArray,successMsg:successMsg,noMsg:!successMsg});
    });
  });


  
  router.get('/add-to-profile/:id',function(req,res,next){
   var courseId = req.params.id;
   var cart = new Cart(req.session.cart ? req.session.cart : {});
  
   Courses.findById(courseId,function(err,course){
     if(err) throw err;
     if(course){
       cart.add(course,course.id);
       req.session.cart=cart;
       console.log(req.session.cart);
       res.redirect('/courses');
     }
   }); 
  }); 

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/faculty', function(req, res, next) {
  res.redirect('https://engineering.mit.edu/faculty-research/')
});
router.get('/staff', function(req, res, next) {
  res.redirect('https://engineering.mit.edu/staff/');
});
router.get('/students', function(req, res, next) {
  res.redirect('https://engineering.mit.edu/students/');
});
router.get('/alumni', function(req, res, next) {
  res.redirect('https://alum.mit.edu/');
});
router.get('/parents', function(req, res, next) {
  res.redirect('https://engineering.mit.edu/parents');
});
router.get('/visitors', function(req, res, next) {
  res.redirect('https://libguides.mit.edu/visitors');
});
router.get('/media', function(req, res, next) {
  res.redirect('http://news.mit.edu/press');
});
router.get('/faculty/mobile-apps', function(req, res, next) {
  res.recirect('http://appinventor.mit.edu/explore/');
});

router.get('/gazette-news', function(req, res, next) {
  res.redirect('https://news.harvard.edu/gazette/');
});
router.get('/events', function(req, res, next) {
  res.redirect('https://calendar.mit.edu/');
});
router.get('/about', function(req, res, next) {
  res.redirect('https://www.mit.edu/about/');
});
router.get('/give', function(req, res, next) {
  res.redirect('https://giving.mit.edu/');
});

router.get('/read-story', function(req, res, next) {
  res.redirect('http://mitstory.mit.edu/');
});





module.exports = router;

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  req.session.oldUrl=req.url;
  console.log(req.session.oldUrl);
  res.redirect('/user/signin');
}

