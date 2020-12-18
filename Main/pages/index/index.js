//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {

    time: '30',
    
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //750rpx
    var res = wx.getSystemInfoSync();
    var rate = 750 / res.windowWidth;
    this.setData({
      rate: rate,
      clockHeight: rate * res.windowHeight
    })
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  grade1: function () {
    app.globalData.state=1;
    wx.navigateTo({
      url: '../calculate/calculate',
    })
},
  grade2: function () {
    app.globalData.state=2;
    wx.navigateTo({
        url: '../calculate/calculate',
    })
  },
  grade3: function () {
    app.globalData.state=3;
    wx.navigateTo({
      url: '../calculate/calculate',
    })
},



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  }

})
