import express from "express";
const router = express.Router();

/* GET modeler page */
router.get('/', function(req, res, next) {
  res.render('modeler', {
    title: 'BPMN Modeler' ,
    myuuid: res.locals.state.MYUUID
  });

});

export default router;
