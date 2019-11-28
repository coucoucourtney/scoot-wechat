// pages/booking_create/booking_create.js

const app = getApp()
const host = app.globalData.host;
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}


Page({

  /**
   * Page initial data
   */
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    value: [9999, 1, 1],
  },

  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
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
      url: host + `scooters/${id}`,
      success: function (res) {
        const scooter = res.data
        console.log(scooter)
        page.setData({ scooter })
      }
    })
  },

  createBooking: function (event) {
    let newBooking = {};
    newBooking.confirmation = true
    newBooking.scooter_id = event.currentTarget.dataset.id
    newBooking.user_id = 24
    console.log(newBooking);
  
    wx.request({
      url: host + 'bookings',

      method: 'post',
      data: newBooking,
      success: function(res) {
        console.log(res)
      }
    })

  },

  goToConfirmationPage: function (e) {
    let id = e.currentTarget.dataset.id
    console.log(e)
    wx.navigateTo({
      url: `/pages/confirmation/confirmation?id=${id}`,
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