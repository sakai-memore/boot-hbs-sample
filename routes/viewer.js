const express = require('express');
const router = express.Router();

/* GET viewer page */
router.get('/', function(req, res, next) {
  res.render('viewer', {
    title: 'BPMN Viewer' ,
    myuuid: res.locals.state.MYUUID
  });

});

module.exports = router;


