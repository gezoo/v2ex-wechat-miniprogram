// pages/latest/latest.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    latestData: [],
    hidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.getData(() => { })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading();
    this.getData(() => {
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  getData(callback) {
    var that = this;
    wx.request({
      url: app.config.latestUrl,
      success(res) {
        that.setData({
          latestData: res.data
        })
      },
      complete() {
        if (callback) callback();
      }
    })
  }
})