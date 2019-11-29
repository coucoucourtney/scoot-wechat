// pages/map/map.js
Page({

  /**
   * Page initial data
   */
  data: {
    markers: [
      {
        iconPath: "/images/icons/user_marker.png", // **1
        id: 0,
        latitude: 31.22352,
        longitude: 121.45591,
        width: 40,
        height: 40
      }//, add more markers here
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const that = this
    wx.getLocation({
      type: 'GCJ-02',
      success: function(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const accuracy = res.accuracy
        that.setData({latitude, longitude, accuracy})
      }
    })

    // wx.authorize({
    //   scope: 'scope.userLocation',
    //   success(res) {
    //     console.log(res)
    //     wx.chooseLocation({
    //       success: function (res) {
    //         console.log(res)
    //       }
    //     })
    //   },
    //   fail(err) {
    //     console.log(err)
    //   }
    // })
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