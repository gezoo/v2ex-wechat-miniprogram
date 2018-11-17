// components/replies/replies.js

const wxParse = require("../../utils/wxParse/wxParse.js")

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    source: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  ready() {
    const that = this;
    wxParse.wxParse('repliesContent', 'html', that.data.source.content_rendered, that, 5)
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
    wxParseTagATap(event){
      console.log(event.currentTarget.dataset.src)
    }
  }
})