//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    clockShow: false,
    clockHeight: 0,
    time: '5',
    timer: null,
    mTime: 300000,
    eTime: 290000,
    timeStr: '05:00',
    rate: '',
    openid: '',
    Y: '',
    M: '',
    D: '',
    h: '',
    m: '',
    s: '',
    cateArr: [
      {
        icon: 'work',
        text: '一年级'
      },
      {
        icon: 'study',
        text: '学习'
      },
      {
        icon: 'think',
        text: '思考'
      },
    ],
    cateActive: '0',
    okShow: false,
    pauseShow: true,
    continueCancleShow: false,
    
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
