// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  goToPost: function (e) {
    let id = this.data.scooter.id
    wx.navigateTo({
      url: `/pages/post/post?id=${id}`,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
      let page = this;

      // // Get api data
      wx.request({
        url: "http://localhost:3000/api/v1/scooters",
        method: 'GET',
        success(res) {
          const scooters = res.data.scooters;
          console.log(scooters);
          // Update local data
          page.setData({
            scooters: scooters
          });

          wx.hideToast();
        }
      });
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