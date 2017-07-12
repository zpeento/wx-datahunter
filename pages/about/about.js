//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  call: function() {
    wx.makePhoneCall({
      phoneNumber: '15811872632' //仅为示例，并非真实的电话号码
    })
  }
})
