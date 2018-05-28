/**
 * Created by haozengrun on 2018/5/21.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Commodity = new Schema({


    title    : String,      //名称

    src : String,      //商品的图片

    mongey : Number,      //金额

    sum  : Number,      //购买人数

    best   : Number,  //是否是推荐 1推荐 0不推荐

    description    : String,     //描述

    discount    : Number     //折扣

})

module.exports = mongoose.model('Commodity',Commodity);