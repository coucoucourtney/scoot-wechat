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
    month: 11,
    days: days,
    day: 30,
    value: [9999, 1, 1],
    date: '2019-11-29'
  },

  // bindChange: function (e) {
  //   const that = this
  //   const val = e.detail.value
  //   that.setData({
  //     year: that.data.years[val[0]],
  //     month: that.data.months[val[1]],
  //     day: that.data.days[val[2]]
  //   })
  // },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
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
    newBooking.user_id = 1
    newBooking.booking_date = date
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