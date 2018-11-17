// components/node-tag/node-tag.js
Component({
  relations: {
    './node': {
      type: 'ancestor'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    source: {
      type: Object,
      value: {
        title: ''
      }
    }
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
    onTap(event){
      this.triggerEvent('tagTap', this.data.source)
    }
  }
})
