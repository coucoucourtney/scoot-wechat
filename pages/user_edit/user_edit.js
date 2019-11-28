// pages/user_edit/user_edit.js
const app = getApp()
const host = app.globalData.host;

Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    const id = options.id
    console.log(options.id)
    wx.request({
      url: host + `users/${id}`,
      success: function (res) {
        const story = res.data
        page.setData({ user })
      }
    })
  },

  updateUser: function(event) {
    console.log(event)
    let id = this.data.user.id
    let newUser = {};
    newUser.name = event.detail.value.name
    newUser.description = event.detail.value.description
    newUser.phone_number = event.detail.value.phone_number
    newUser.location = event.detail.value.location
    wx.request({
      url: host + `users/${id}`,
      method: 'put',
      data: newUser,
      success: function (res) {
        console.log(res)
        const id = res.data.id
        wx.redirectTo({
          url: `/pages/user/user?id=${id}`,
        })
      }
    })
  },


  // /**
  //  * Lifecycle function--Called when page is initially rendered
  //  */
  // onReady: function () {

  // },

  // /**
  //  * Lifecycle function--Called when page show
  //  */
  // onShow: function () {

  // },

  // /**
  //  * Lifecycle function--Called when page hide
  //  */
  // onHide: function () {

  // },

  // /**
  //  * Lifecycle function--Called when page unload
  //  */
  // onUnload: function () {

  // },

  // /**
  //  * Page event handler function--Called when user drop down
  //  */
  // onPullDownRefresh: function () {

  // },

  // /**
  //  * Called when page reach bottom
  //  */
  // onReachBottom: function () {

  // },

  // /**
  //  * Called when user click on the top right corner to share
  //  */
  // onShareAppMessage: function () {

  // }


})