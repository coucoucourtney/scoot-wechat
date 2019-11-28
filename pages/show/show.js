// pages/show/show.js
const app = getApp()
const host = app.globalData.host;

Page({

  /**
   * Page initial data
   */
  data: {
  },

  goToBookingPage: function (e) {
    let id = e.currentTarget.dataset.id
    console.log(e)
    wx.navigateTo({
      url: `/pages/booking_create/booking_create?id=${id}`,
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

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})