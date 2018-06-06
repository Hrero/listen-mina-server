var express = require('express');
var router = express.Router();
var Users = require('../schema/users');

//统一返回格式
var responseData;

router.use(function (req,res,next) {
    responseData = {
        code:0,
        message:''
    }
    next()
})
//  注册
router.post('/register',function(req,res,next){

    console.log(req.body)
    var username = req.body.username;
    var password = req.body.password;
    var redopassword = req.body.redopassword;
    if( username == '' ){
        responseData.code = 1;
        responseData.message = '用户名不能为空';
        res.json(responseData);
        return;
    }
    if( password == '' ){
        responseData.code = 2;
        responseData.message = '密码不能为空';
        res.json(responseData);
        return;
    }
    if( password != redopassword ){
        responseData.code = 3;
        responseData.message = '两次输入的密码不一致';
        res.json(responseData);
        return;
    }

    //验证用户在数据库里面是否被注册
    Users.findOne({
        username:username
    }).then(function (userInfo) {

        if( userInfo ){
            //数据库有记录
            responseData.code = 4;
            responseData.message = '用户名已经被注册';
            res.json(responseData);
            return;
        }
        //保存数据到数据库中
        var user = new Users({
            username:username,
            password:password
        })
        return user.save();
    }).then(function (newuserInfo) {
        responseData.message = '注册成功';
        // req.cookies.set('userInfo',JSON.stringify({
        //     _id:newuserInfo._id,
        //     username:newuserInfo.username
        // }));

        res.json(responseData);
        return;
    })

});

/* 登路 */
router.post('/login',function (req,res,next) {

    var username = req.body.username;
    var password = req.body.password;

    if( username == '' || password == '' ){
        responseData.code = 1;
        responseData.message = '用户名和密码不能为空';
        res.json(responseData);
        return;
    }

    //查询数据库中用户名和密码是否存在 如果存在则登陆成功
    Users.findOne({
        username:username,
        password:password
    }).then(function (userInfo) {
        if(!userInfo){
            responseData.code = 2;
            responseData.message = '用户名或密码错误';
            res.json(responseData);
            return;
        }
        //正确的
        responseData.message = '登录成功';
        // responseData.userInfo = {
        //     _id:userInfo._id,
        //     username:userInfo.username
        // }
        // req.cookies.set('userInfo',JSON.stringify({
        //     _id:userInfo._id,
        //     username:userInfo.username
        // }));
        res.json(responseData);
        return;
    })

})

module.exports = router;
