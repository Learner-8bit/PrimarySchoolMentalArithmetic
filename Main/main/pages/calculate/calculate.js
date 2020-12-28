//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

var maxA = 9, maxB = 99, maxC = 999;
var array_test = [{ A:1, B:1, C:'+', pro:2, ans:0, res: ''},{ A:1, B:2, C:'+', pro:3, ans:3, res: ''}];
array_test.length = 2;
var array_sign = ['+','-','×','÷','%'];



Page({
  data: {
    logs:[],
    array_page: array_test,
    numEqu: 20,
    numPro: 0,
    EquSta : 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  empty:function(){
  },
  sltA: function () {
    //一年级
    var sign_equ = 0;
    for(var i = 0; i < this.data.numEqu; i++){
      array_test[i] = {};
      sign_equ = parseInt(Math.random() + 0.5);
      array_test[i].C = array_sign[sign_equ];
      array_test[i].A = parseInt(Math.random() * maxA) + 1;
      if(sign_equ === 0){
        array_test[i].B = parseInt(Math.random() * (maxA - array_test[i].A)) + 1;
        array_test[i].pro = array_test[i].A + array_test[i].B;
      } 
      else if(sign_equ === 1){
        array_test[i].B = parseInt(Math.random() * (array_test[i].A)) + 1;
        array_test[i].pro = array_test[i].A - array_test[i].B;
      }
      array_test[i].ans = -1;
      array_test[i].res = '';
    }
    this.setData({ array_page: array_test });
  },
  sltB: function () {
    //二年级
    var sign_equ = 0;
    for(var i = 0; i < this.data.numEqu; i++){
      array_test[i] = {};
      sign_equ = parseInt(Math.random() * 4);
      array_test[i].C = array_sign[sign_equ];
      if(sign_equ < 2){
        array_test[i].A = parseInt(Math.random() * maxB) + 1;
        if(sign_equ === 0){
          array_test[i].B = parseInt(Math.random() * (maxB - array_test[i].A)) + 1;
          array_test[i].pro = array_test[i].A + array_test[i].B;
        } 
        else if(sign_equ === 1){
          array_test[i].B = parseInt(Math.random() * (array_test[i].A)) + 1;
          array_test[i].pro = array_test[i].A - array_test[i].B;
        }
      }
      else if(sign_equ >= 2){
        array_test[i].B = parseInt(Math.random() * maxA) + 1;
        if(sign_equ === 2){
          array_test[i].A = parseInt(Math.random() * maxA) + 1;
          array_test[i].pro = array_test[i].A * array_test[i].B;
        }
        else if(sign_equ === 3){
          array_test[i].pro = parseInt(Math.random() * maxA) + 1;
          array_test[i].A = array_test[i].B * array_test[i].pro;
        }
      }
      array_test[i].ans = -1;
      array_test[i].res = '';
    }
    this.setData({ array_page: array_test });
  },
  sltC: function () {
    //三年级
    var sign_equ = 0;
    for( var i = 0; i < this.data.numEqu; i++){
      array_test[i] = {};
      sign_equ = parseInt(Math.random() * 4);
      array_test[i].C = array_sign[sign_equ];
      if(sign_equ < 2){
        array_test[i].A = parseInt(Math.random() * maxC) + 1;
        if(sign_equ === 0){
          array_test[i].B = parseInt(Math.random() * (maxC - array_test[i].A)) + 1;
          array_test[i].pro = array_test[i].A + array_test[i].B;
        } 
        else if(sign_equ === 1){
          array_test[i].B = parseInt(Math.random() * (array_test[i].A)) + 1;
          array_test[i].pro = array_test[i].A - array_test[i].B;
        }
      }
      else if(sign_equ >= 2){
        array_test[i].B = parseInt(Math.random() * maxB) + 1;
        if(sign_equ === 2){
          array_test[i].A = parseInt(Math.random() * maxB) + 1;
          array_test[i].pro = array_test[i].A * array_test[i].B;
        }
        else if(sign_equ === 3){
          array_test[i].pro = parseInt(Math.random() * maxB) + 1;
          array_test[i].A = array_test[i].B * array_test[i].pro;
        }
      }
      array_test[i].ans = -1;
      array_test[i].res = '';
    }
    this.setData({ array_page: array_test });
  },

  showPro: function () {
    //显示结果
    this.setData({ EquSta: 1 });
  },
  showAns: function () {
    //显示答案
    this.setData({ EquSta: 2 });
  },
  checkInput: function () {
    //批改
    var numProper = 0;
    for(var i = 0; i < this.data.numEqu; i++){
      if (array_test[i].ans===-1)
        array_test[i].res = '空';
      else if (array_test[i].ans === array_test[i].pro){
        array_test[i].res = '✔';
        numProper++;
      }
      else 
        array_test[i].res = '✘';
    }
    this.setData({ array_page: array_test });
    this.setData({ numPro: numProper});
    this.showPro();
  },
  newTest:function(){
    //新题目
    wx.navigateTo({
      url: '../calculate/calculate',
    })
  },
  formSubmit: function(e) {
    //提交
    for(var i = 0; i < this.data.numEqu ; i++){
      var numInput = "input" + i;
      var ansTemp = e.detail.value[numInput];
      if( !ansTemp ) array_test[i].ans = -1;
      else array_test[i].ans = parseInt(ansTemp);
   }
   this.setData({ array_page: array_test });
   this.checkInput();

    //更新学习记录
    var todaytimes=0;
    var totaltimes=0; 
    var firstDate = new Date();
    var myDate = new Date();
    //更新今日练习次数
    todaytimes= wx.getStorageSync('Todaytimes')||0;
    todaytimes=todaytimes+1;
    wx.setStorageSync('Todaytimes',todaytimes);
   //更新总计练习次数
    totaltimes= wx.getStorageSync('Totaltimes')||0;
    totaltimes=totaltimes+1;
    wx.setStorageSync('Totaltimes',totaltimes);
   //更新时间记录  
    var templogs = wx.getStorageSync('logs')||[];
    var accuracy = ((this.data.numPro/this.data.numEqu)*100).toFixed(2);
    var addlogs = {
      date : util.formatTime(new Date()),
      numEqu: this.data.numEqu,
      numPro: this.data.numPro,
      accuracy: accuracy,
    };
    console.log(addlogs);
    //var nowdate = util.formatTime(new Date());
    templogs.unshift(addlogs);
    wx.setStorageSync('logs',templogs);
    this.setData({
      logs: (wx.getStorageSync('logs') || [])
    });
  },
  formReset: function(e) {
    //清空
  },

  backto:function(e)
  {
    wx.switchTab({
      url: '../index/index',
    })
  },
  onShow:function(){
    
    this.setData({
      numEqu:(wx.getStorageSync('Equnum')||20),
    });
    if(app.globalData.state==1) this.sltA();
    else if(app.globalData.state==2) this.sltB();
    else {
        this.sltC();
    }

  }
})
