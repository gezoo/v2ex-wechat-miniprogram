// components/node/node.js
const util = require('../../utils/util.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type:Object
    },
    nextUrl:{
      type:String
    }
  },
  created(){
  },
  ready(){
    const date = util.formatLastTouched(this.data.data.last_touched)
    this.setData({
      'data.last_touched': date
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
  },

})
