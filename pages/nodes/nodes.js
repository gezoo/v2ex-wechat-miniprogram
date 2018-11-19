// pages/nodes/nodes.js
const xmldoc = require('../../utils/v2exHtmlParse.js')
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodesData: [],
    hidden: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getData();
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
  getData() {
    const that = this
    wx.getStorage({
      key: 'nodes',
      success(res) {
        that.setData({
          nodesData: res.data,
          hidden: true
        })
      },
      fail() {
        wx.request({
          url: app.config.nodesHtmlUrl,
          success(res) {
            const data = xmldoc.parser(res.data)
            that.setData({
              nodesData: data,
              hidden: true
            })
            wx.setStorage({
              key: 'nodes',
              data: data,
            })
          },
          fail() {
            that.setData({
              hidden: true
            })
          }
        })
      },
    })
  },
  onTap(event) {
    console.log(event)
    wx.navigateTo({
      url: `/pages/member_topics/member_topics?key=node_id&value=${event.detail.id}&title=${event.detail.title}`,
    })
  }
})