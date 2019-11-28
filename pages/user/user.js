// pages/user/user.js
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
    // need this to call the id number from login
    const page = this
    // const id = options.id
    // console.log(1, options)
    // console.log(options)
    const id = 23
    wx.request({
      url: host + `users/${id}`,
      success: function (res) {
        const user = res.data
        console.log(user)
        page.setData({ user })
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  // onReady: function () {

  // },

  /**
   * Lifecycle function--Called when page show
   */
  // onShow: function () {

  // },

  /**
   * Lifecycle function--Called when page hide
   */
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

  // },

  addScooter: function (e) {
    let id = e.currentTarget.dataset.id
    console.log(e)
    wx.navigateTo({
      url: `/pages/scooter_create/scooter_create?id=${id}`,
    })
  },
// data-key="{{user.id}} sent over to create_scooter


  editScooter: function (e) {
    let id = e.currentTarget.dataset.id
    console.log(e)
    wx.navigateTo({
      url: `/pages/scooter_edit/scooter_edit?id=${id}`,
    })
  },
// data-key="{{user.scooter_id}}"

  editUser: function (e) {
    let id = e.currentTarget.dataset.id
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: `/pages/user_edit/user_edit?id=${id}`,
    })
  },
// data-key="{{user.id}}"

})