// pages/scooter_edit/scooter_edit.js
const app = getApp()
const host = app.globalData.host;

Page({

  /**
   * Page initial data
   */
  data: {

  },

  takePhoto: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    const id = options.id
    console.log(1, options)
    console.log(options)
    wx.request({
      url: host + `scooters/${id}`,
      success: function (res) {
        const scooter = res.data
        console.log(scooter)
        page.setData({ scooter })
      }
    })
  },

  goToUserPage: function (e) {
    let id = e.currentTarget.dataset.id
    console.log(e)
    wx.navigateTo({
      url: `/pages/user/user?id=${id}`,
    })
  },

  updateScooter: function (event) {
    console.log(event)
    let id = this.data.user.id
    let newUser = {};
    newScooter.model = event.detail.value.model
    newScooter.year = event.detail.value.year
    newScooter.battery = event.detail.value.battery
    newScooter.top_speed = event.detail.value.top_speed
    newScooter.location = event.detail.value.location
    newScooter.price = event.detail.value.price
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

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  })
