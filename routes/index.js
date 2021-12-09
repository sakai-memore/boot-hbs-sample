var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(req.session);
  res.render('index', {
    title: 'BPM (Business Process Modeling)' ,
    appName: res.locals.state.CONF.get('APP_NAME'), 
    myuuid: res.locals.state.MYUUID
  });
});

module.exports = router;
