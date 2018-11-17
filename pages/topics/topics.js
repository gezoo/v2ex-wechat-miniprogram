// pages/topics/topics.js
const wxParse = require("../../utils/wxParse/wxParse.js")
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topicData: {},
    repliesData: [],
    now: '',
    pageSize: 10,
    pageIndex: 1,
    hidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this;
    this.getData(options.id)
    this.getRepliesData(options.id, ()=>{
      that.setData({
        hidden: true
      })
    })
    this.setData({
      now: app.util.formatTime(new Date())
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

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

  getData(id, callback) {
    const that = this;
    wx.request({
      url: app.config.topicUrl + id,
      success(res) {
        const node = res.data[0];
        if (node.content_rendered) {
          wxParse.wxParse('topicContent', 'html', node.content_rendered, that, 10)
        }
        that.setData({
          topicData: node,
        })
      },
      complete() {
        if (callback) callback()
      }
    })
  },
  getRepliesData(topicId, callback) {
    const that = this;
    wx.request({
      url: app.config.repliesUrl + `${topicId}&&page=${1}&page_size=${10}`,
      success(res) {
        console.log(res.data)
        that.setData({
          repliesData: res.data
        })
      },
      complete() {
        if (callback) callback()
      }
    })
  },
  wxParseTagATap(event) {
    console.log(event.currentTarget.dataset.src)
  },
  onTagTap(event){
    console.log(event)
  }
})