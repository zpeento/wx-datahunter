//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    swiper: {
      indicatorDots: true,
      autoplay: true,
      interval: 4000,
      duration: 2000,
      imgUrl:['../../images/team_1.jpg','../../images/team_2.jpg','../../images/team_3.jpg']
    }
  },
  call: function() {
    wx.makePhoneCall({
      phoneNumber: '15811872632' //仅为示例，并非真实的电话号码
    })
  }
})
