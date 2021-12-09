const createError = require('http-errors');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const expressState = require('express-state');
// express setting
const path = require('path');
//var cookieParser = require('cookie-parser');
// https://www.npmjs.com/package/express-session
const session = require('express-session');
//const bodyParser = require('body-parser');
//const csrf = require("csurf");
const uuidv1 = require('uuid').v1;
const CONF = require('config');
const logger = require('morgan');

// routing setting
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const settingsRouter = require('./routes/settings');
const viewerRouter = require('./routes/viewer');
const modelerRouter = require('./routes/modeler');

// apps
//const csrfProtection = csrf({ cookie: true});
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);
app.set('layout', 'includes/_layout');
app.use(expressLayouts);

// express middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// use session
const sess = {
  genid: (req)=>uuidv1(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess));
//app.use(express.csrf());

// state and config
expressState.extend(app);
const myuuid = uuidv1();
app.expose(CONF, 'CONF', {cache: true});
app.use(function (req, res, next) {
  res.expose(CONF, 'CONF', {cache: true});
  res.expose(myuuid, 'MYUUID');
  next();
});
console.log(`APP_NAME : ${app.locals.state.CONF.get('APP_NAME')}`);
console.log(`MYUUID : ${myuuid}`);

// use routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/settings', settingsRouter);
app.use('/viewer', viewerRouter);
app.use('/modeler', modelerRouter);


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
