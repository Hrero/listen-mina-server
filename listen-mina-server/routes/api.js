var express = require('express');
var router = express.Router();
var questions=[
    {
        data:213,
        num:444,
        age:12
    },
    {
        data:456,
        num:678,
        age:13
    }];
/* GET users listing. */
router.get('/login', function(req, res, next) {

  res.status(200);
  res.json(questions);

  // res.send('respond with a resource');
    //console.log(req)
});

module.exports = router;
