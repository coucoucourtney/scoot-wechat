// pages/confirmation/confirmation.js
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
    const id = options.id
    console.log(options)
    const page = this
    console.log(options)
    wx.request({
      url: `https://rent-scoot.herokuapp.com/api/v1/scooters/${id}`,
      success: function (res) {
        const scooter = res.data
        console.log(scooter)
        page.setData({ scooter })
      }
    })
  },

  createBooking: function (event) {
    let newBooking = {};
    newBooking.confirmation = event.detail.value.confirmation
    wx.request({
      url: 'https://rent-scoot.herokuapp.com/api/v1/bookings',
      method: 'post',
      data: newBooking,
      success: function (res) {
        console.log(res)
      }

    })
  },

// not working
  // goToBookingsPage: function(e) {
  //   // let id = e.currentTarget.dataset.id
  //   // console.log(e)
  //   wx.navigateTo({
  //     pagePath: "pages/bookings/bookings",
  //   })
  // },

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
  onUnload: function (options) {
    const id = options.id
    console.log(options)
    const page = this
    console.log(options)
    wx.request({
      url: `https://rent-scoot.herokuapp.com/api/v1/scooters/${id}`,
      success: function (res) {
        const scooter = res.data
        console.log(scooter)
        page.setData({ scooter })
      }
    })
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