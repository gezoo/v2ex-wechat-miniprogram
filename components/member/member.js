// components/member/member.js
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
    },
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
    onMemberTap(event) {
      console.log(event.currentTarget.dataset.src)
      wx.navigateTo({
        url: '../../pages/member_topics/member_topics?key=username&value=' + event.currentTarget.dataset.src,
      })
    }
  }
})