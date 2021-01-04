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

  },
  getUserInfo: function (e) {

  },
  grade1: function () {//一年级
    app.globalData.state=1;
    wx.navigateTo({
      url: '../calculate/calculate',
    })
},
  grade2: function () {//二年级
    app.globalData.state=2;
    wx.navigateTo({
        url: '../calculate/calculate',
    })
  },
  grade3: function () {//三年级
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
