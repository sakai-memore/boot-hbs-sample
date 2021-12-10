const express = require('express');
const router = express.Router();

/* GET modeler page */
router.get('/', function(req, res, next) {
  res.render('modeler', {
    title: 'BPMN Modeler' ,
    myuuid: res.locals.state.MYUUID
  });

});

module.exports = router;


