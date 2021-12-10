const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    title: 'Users' ,
    myuuid: res.locals.state.MYUUID
  });

});

module.exports = router;


