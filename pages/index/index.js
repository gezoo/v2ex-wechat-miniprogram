//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hotData: [],
    hidden:false
  },

  onLoad: function() {

  },
  onShow: function() {
    this.getHotData();
  },
  onPullDownRefresh() {
    wx.showNavigationBarLoading();
    this.getHotData(() => {
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    });
  },
  onReachBottom() {},
  getHotData(callback) {
    var that = this;
    wx.request({
      url: app.config.hotUrl,
      success(res) {
        that.setData({
          hotData: res.data,
          hidden: true
        })
      },
      complete() {
        if (callback) callback();
      }
    })
  },
  onTap(event) {

  }
})