import express from "express";
const router = express.Router();

/* GET viewer page */
router.get('/', function(req, res, next) {
  res.render('viewer', {
    title: 'BPMN Viewer' ,
    myuuid: res.locals.state.MYUUID
  });

});

export default router;
