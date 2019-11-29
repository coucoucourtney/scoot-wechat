// pages/bookings/bookings.js
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
    let page = this
    let id = this.data.userId || 1;
    wx.request({
      url: host + `bookings/${id}`,
      success: function (res) {
        const bookings = res.data
        page.setData({ bookings })
      }
    })
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
    // your  bookings
    // grab user id from scooter booking page - > scooter.user_id
    // load all your bookings through
    // booking.user_id 
    // put booking instance into array
    // make sure new booking is added

    // bookings for your scooter
    // load all bookings
    // booking.scooter_id == scooter.id
    // 
    //switch tab
  },

  loadScooterBookings: function (){
    // 
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