//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hotData:[],
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: app.config.hotUrl,
      success(res) {
        console.log(res);
        that.setData({
          hotData: res.data
        })
      }
    })
  }
})
