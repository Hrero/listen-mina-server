var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();

Page({
    data: {
        backgroundAudioManager:{},
        totalProcess:0,    //右值
        currentProcess:0,    //左值
        sliderMax:0,        //最大值
        sliderValue:0     //当前值
    },
    onShow() {


    },
    onLoad(){
        var article = '<div style="color:red">我是<br>HTML代码</div>';
        /**
         * WxParse.wxParse(bindName , type, data, target,imagePadding)
         * 1.bindName绑定的数据名(必填)
         * 2.type可以为html或者md(必填)
         * 3.data为传入的具体数据(必填)
         * 4.target为Page对象,一般为this(必填)
         * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
         */
        var that = this;
        WxParse.wxParse('article', 'html', article, that, 5);
    }
})