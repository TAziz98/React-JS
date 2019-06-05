var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs = require('express-handlebars')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var validator = require('express-validator');
var bodyParser =require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
require('express-locals');
//mongoose.connect('localhost:27017/courses');
var MongoStore = require('connect-mongo')(session);
var app = express();
mongoose.connect('mongodb://test:mytest1@dbh63.mlab.com:27637/todo',{useNewUrlParser: true}).then(
  ()=>{
    console.log("connected to mongoDB")},
 (err)=>{
     console.log("err",err);
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.engine('.hbs',expressHbs({defaultLayout: 'layout', extname: '.hbs'}))
require('./config/passport');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret:'mysecret', 
resave:false,
 saveUninitialized:false,
store: new MongoStore({ mongooseConnection:mongoose.connection}),
cookie:{maxAge: 180 * 60 * 1000}
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(validator());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req,res,next){
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  res.locals.smt = 'fff';
    next();
  });
  
app.use('/user', usersRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
