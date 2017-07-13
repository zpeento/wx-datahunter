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
      dataCustom: [{
        imgUrl:'../../images/data1.jpg',
        text:'案例一：广东外语外贸大学新闻与传播学院科研项目，“境外媒体在华传播现状的数据采集、分析”，需要对境外媒体在微博的传播情况进行分析。数据猎人工作室为其整合了分散在微博的数百家境外媒体的数据，同时通过可视化分析对集成数据进行深入挖掘，为该课题的科研工作者提供了有力的辅助。'
      },{
        imgUrl:'../../images/data2.jpg',
        text:'案例二：广州某知名投资咨询公司需要大量互联网行业的企业及投资机构信息动态。数据猎人工作室为其提供一年的数据定制服务，包括搭建数据实时采集引擎、数据清洗、数据库构建与维护、数据分析API开发等数据服务。帮助客户节省开发和人力成本，安全、实时、稳定、高效、便捷地获取其所需要的数据，帮助公司进行竞争情报手机和网站内容维护。'
      }],
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
  call: function() {
    wx.makePhoneCall({
      phoneNumber: '15811872632' //仅为示例，并非真实的电话号码
    })
  }
})
