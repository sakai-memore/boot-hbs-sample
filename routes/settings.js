import express from "express";
const router = express.Router();

/* GET settings page */
router.get('/', function(req, res, next) {
  res.render('settings', {
    title: 'Settings' ,
    myuuid: res.locals.state.MYUUID
  });

});

export default router;
