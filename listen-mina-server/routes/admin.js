var express = require('express');
var router = express.Router();

//首页
router.get('/',function(req,res,next){
    res.render('admin/index',{
        userinfo:req.userinfo
    });
});
module.exports = router;
