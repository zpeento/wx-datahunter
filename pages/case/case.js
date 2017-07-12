//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tab_index: '0',
    swiper: {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 2000,
      dataCustomImg: ['../../images/data1.png','../../images/data2.png'
      ],
      wxProgramImg: ['../../images/wx1.png','../../images/wx2.png','../../images/wx3.jpg','../../images/wx4.jpg']
    }
  },
  onShow:function(options){
    var curIndex = wx.getStorageSync('curIndex')
    if (curIndex) {
      this.setData({
        tab_index:curIndex
      })
    }
    
  },
  //事件处理函数
  showDataCustom: function() {
    wx.setStorageSync('curIndex','0')
    this.setData({
      tab_index:"0"
    })
  },
  showWxProgram: function() {
    wx.setStorageSync('curIndex','1')
    this.setData({
      tab_index:"1"
    })
  },
  showWebDev: function() {
    wx.setStorageSync('curIndex','2')
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
