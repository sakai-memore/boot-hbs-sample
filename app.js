import createError from'http-errors';
import express from "express";
import expressLayouts from 'express-ejs-layouts';
import expresshandlebars from 'express-handlebars';
import expressState from 'express-state';
// express setting
import path from 'path';
//var cookieParser = require('cookie-parser');
// https://www.npmjs.com/package/express-session
import session from 'express-session';
//const bodyParser = require('body-parser');
//const csrf = require("csurf");
import { v1 as uuidv1 } from 'uuid';
import CONF from 'config';
import logger from 'morgan';

// routing setting
import indexRouter  from './routes/index.js';
import usersRouter  from './routes/users.js';
import settingsRouter  from './routes/settings.js';
import viewerRouter  from './routes/viewer.js';
import modelerRouter  from './routes/modeler.js';

// apps
//const csrfProtection = csrf({ cookie: true});
const app = express();

// view engine setup
const hbs = expresshandlebars.create({
  defaultLayout: '_layout',
  partialsDir: ['pages/partials'],
  extname: '.hbs'
})
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
const __dirname = path.resolve();
console.log(__dirname);
app.set('views', path.join(__dirname, 'pages'));
// app.set('view engine', 'ejs');
// app.set('layout extractScripts', true);
// app.set('layout extractStyles', true);
// app.set('layout', 'components/_layout');
//app.use(expressLayouts);

// express middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'assets')));

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

export default app;
