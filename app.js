//app.js
const config = require('./config')
const util = require('./utils/util.js')

App({
  onLaunch: function() {
  },
  globalData: {
    userInfo: null
  },
  config: config,
  util: util
})