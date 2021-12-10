import express from "express";
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    title: 'Users' ,
    myuuid: res.locals.state.MYUUID
  });

});

export default router;
