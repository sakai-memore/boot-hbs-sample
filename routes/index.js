import express from "express";
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(req.session);
  res.render('index', {
    title: 'Sample with using express-handlebars-bootstrap' ,
    appName: res.locals.state.CONF.get('APP_NAME'), 
    myuuid: res.locals.state.MYUUID
  });
});

export default router;
