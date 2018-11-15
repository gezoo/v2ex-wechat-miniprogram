const miment = require('../miniprogram_npm/miment/index.js')

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatLastTouched = timestamp =>{
  const diffDate = miment().distance(timestamp);
  return diffDate.format('YYYY年MM月DD日 hh时mm分ss秒')
  
}

module.exports = {
  formatTime: formatTime,
  formatLastTouched: formatLastTouched
}
