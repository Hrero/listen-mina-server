Page({
    data: {
        windowHeight:0,
        condition:false,
        isShow:false,
        chooseTitle:'暂不使用优惠券',
        listRead:[
            {
                "title":"01.找到职场人生新拐点，抓准老板的痛点，让你反客为主。",
                "qixian":10,
                "time":"12-9"
            },
            {
                "title":"01.找到职场人生新拐点，抓准老板的痛点，让你反客为主。",
                "qixian":10,
                "time":"12-1"
            },
            {
                "title":"01.找到职场人生新拐点，抓准老板的痛点，让你反客为主。",
                "qixian":11,
                "time":"12-9"
            },
            {
                "title":"01.找到职场人生新拐点，抓准老板的痛点，让你反客为主。",
                "qixian":10,
                "time":"12-9"
            }
        ]
    },
    taplabel(e){
        let that = this;
        that.setData({
            tapLabelIndex:e.target.dataset.index
        })
    },
    clickBuy(){

        let that = this;

        that.setData({
            condition:!that.condition
        })

        // console.log(1)
    },
    GoListenPage(){
        wx.navigateTo({
            url: '/pages/listen/listen'
        })
    },
    onReachBottom(){
        // console.log(1)
    },
    onShowDownDes(){
        let that = this;
        that.setData({
            isShow:true
        })
    },
    onLoad(){

    }
})