//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   console.log('onLoad')
  //   var that = this
  //   //调用应用实例的方法获取全局数据
  //   app.getUserInfo(function(userInfo){
  //     //更新数据
  //     that.setData({
  //       userInfo:userInfo
  //     })
  //   })
  // }
  toDataCustom: function() {
    wx.setStorageSync('curIndex','0')
    wx.switchTab({
      url: '/pages/case/case'
    })
  },
  toWxProgram: function() {
    wx.setStorageSync('curIndex','1')
    wx.switchTab({
      url:"/pages/case/case"
    })
  },
  toWebDev: function() {
    wx.setStorageSync('curIndex','2')
    wx.switchTab({
      url:"/pages/case/case"
    })
  }
})
