// components/replies/replies.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    source:{
      type:Object
    },
  },
  ready() { 
    const that = this;
    wxParse.wxParse('repliesContent', 'html', source.content_rendered, that, 10)
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

  }
})
