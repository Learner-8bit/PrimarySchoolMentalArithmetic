//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    dayList: [],
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
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})
