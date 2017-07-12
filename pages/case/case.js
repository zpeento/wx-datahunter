//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tab_index: '0',
    swiper: {
      imgUrls: [   'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 2500,
      duration: 1000
    }
  },
  onLoad:function(options){
    this.setData({
      tab_index:options.curindex
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showDataCustom: function() {
    this.setData({
      tab_index:"0"
    })
  },
  showWxProgram: function() {
    this.setData({
      tab_index:"1"
    })
  },
  showWebDev: function() {
    this.setData({
      tab_index:"2"
    })
  },
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
})
