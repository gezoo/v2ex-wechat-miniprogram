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
  const diff =Math.round( miment().stamp() / 1000 - timestamp)
  var timeSpanStr = ''
  if(diff < 60){
    timeSpanStr = '刚刚'
  }else if(diff >60 && diff < 60 * 60 ){
    timeSpanStr = `${Math.round(diff / 60)}分钟前`
  }else if(diff > 60 * 60 && diff < 60 * 60 * 24){
    timeSpanStr = `${Math.round(diff / 60 / 60 )}小时前`
  }else if(diff > 60 * 60 * 24 && diff < 60 * 60 * 24 * 15){
    timeSpanStr = `${Math.round(diff / 60 / 60 / 24)}天前`
  }else{
    timeSpanStr = miment(timestamp).format('YYYY年MM月DD日')
  }
  return timeSpanStr  
}

module.exports = {
  formatTime: formatTime,
  formatLastTouched: formatLastTouched
}
