// components/node/node.js
const util = require('../../utils/util.js')

Component({
  relations:{
    './node-tag':{
      type:'descendant'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    source: {
      type: Object
    },
  },
  created() {},
  ready() {
  },
  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(){
      this.triggerEvent('click',this.data.source)
    }
  },

})