//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tab_index: '0',
    swiper: {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 2000,
      dataCustomImg: ['../../images/data1.jpg','../../images/data2.jpg'
      ],
      wxProgramImg: ['../../images/wx1.jpg','../../images/wx2.jpg','../../images/wx3.jpg','../../images/wx4.jpg']
    }
  },
  onShow:function(){
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
