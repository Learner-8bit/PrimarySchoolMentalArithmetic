// pages/author/author.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Equnum:20,
  },
  /**
   * 用户点击右上角分享
   */
  ADDEqunum:function(){
    var num = (wx.getStorageSync('Equnum') || 20);
    num=num+1;
    if(num>30)
    {
      let notice = "您确定要继续增加吗?";
      var that=this;
      wx.showModal({
        title: '再加就做不完了!',
        content: notice,
        success(res) {
            if (res.confirm) {
              wx.setStorageSync('Equnum', num);
              that.setData({
                  Equnum:num
              });
            } 
            else if (res.cancel) {
              num=num-1;
              wx.setStorageSync('Equnum', num);
              that.setData({
                  Equnum:num
              });
          }
        }
      })
    }
    else
    {
      wx.setStorageSync('Equnum', num);
      this.setData({
          Equnum:num
      });
    }
  },    
  subEqunum:function()
  {
    var num = (wx.getStorageSync('Equnum') || 20);
    num=num-1;
    if(num < 1){
      wx.showModal({
        title: '已经不能再减小了',
        confirmText: "知道了",
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            //点击确定按钮
          } else if (res.cancel) {
            //点击取消按钮
          }
        }
      })
      num=1;
      wx.setStorageSync('Equnum', num);
      this.setData({
        Equnum:num
    });
    }
    else{
      wx.setStorageSync('Equnum', num);
      this.setData({
        Equnum:num
      });
    }
  },

clear:function(){
  let notice = "您确定要清空数据吗?";
  wx.showModal({
    title: '温馨提示',
    content: notice,
    success(res) {
      if (res.confirm) {
        console.log('用户点击确定')
        wx.clearStorageSync();
        wx.switchTab({
          url: '/pages/logs/logs'
        })
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })

},
onShow:function(){
  this.setData({
    Equnum: (wx.getStorageSync('Equnum') || 20),
});

},

  onShareAppMessage: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})