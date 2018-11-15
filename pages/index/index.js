//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hotData: [],
  },

  onLoad: function() {
    this.getHotData();
  },
  onPullDownRefresh() {
    wx.showNavigationBarLoading();
    this.getHotData(() => {
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    });
  },
  onReachBottom(){
    wx.showLoading({
      title: '玩命加载中',
    });
    
    wx.hideLoading();
  },
  getHotData(callback) {
    var that = this;
    wx.request({
      url: app.config.hotUrl,
      success(res) {
        console.log(res.data)
        that.setData({
          hotData: res.data
        })
      },
      complete(){
        if (callback) callback();
      }
    })
  },
  onTap(event){
    console.log(event.detail)
    wx.navigateTo({
      url: `../../pages/topics/topics?id=${event.detail.id}&title=${event.detail.title}`
    })
  }
})