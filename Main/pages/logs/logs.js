//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    test:1,
    Todaytimes:0,
    totaltimes:0,
    maxday:30,
    logs:[],
    dayList: [],
    accuracy:[1,2,3],
    list: [],
    activeIndex: 0,
    index:0,
    sum: [
      {
        title: '今日练习次数',
        val: '0'
      },
      {
        title: '累计次数次数',
        val: '0'
      },
    ],
  },
  onShow: function () {
     this.setData({
       logs: (wx.getStorageSync('logs') || []),
       //accuracy:(wx.getStorageSync('accracy') ||0),
       //Todaytimes:wx.getStorageSync('Todaytimes')||0,
       //totaltimes:wx.getStorageSync('totaltimes')||0,
        'sum[0].val':wx.getStorageSync('Todaytimes')||0,
        'sum[1].val':wx.getStorageSync('Totaltimes')||0
   });
    if (this.data.sum[0].val== 0) 
    {
      var firstDate = new Date();
      wx.setStorageSync('firstDate',firstDate.getDate());
    }
    var nowDate = new Date();
    var FirstDay = wx.getStorageSync('firstDate');
    if(nowDate.getDate()!== FirstDay) {
      wx.setStorageSync('firstDate',nowDate.getDate());
      wx.setStorageSync('Todaytimes',0);
      this.setData({
        'sum[0].val':wx.getStorageSync('Todaytimes')||0,
    })
    //this.getlogs();
  }
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
