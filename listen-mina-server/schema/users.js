/**
 * Created by haozengrun on 2018/5/21.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Users = new Schema({


    username    : String,      //用户名

    src : String,      //用户头像

    location : String      //地址


})

module.exports = mongoose.model('User',Users);