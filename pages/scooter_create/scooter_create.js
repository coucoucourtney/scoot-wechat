// pages/scooter_create/scooter_create.js
const app = getApp()
const host = app.globalData.host;
const AV = require('../../utils/av-weapp-min.js');
Page({
  data: {
    items: []
  },
  onLoad: function () {
  },
  takePhoto: function () {
    let page = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        let tempFilePath = res.tempFilePaths[0];
        page.setData({
          tempFilePath
        })
        new AV.File('file-name', {
          blob: {
            uri: tempFilePath,
          },
        }).save().then(
          file => {
            let imgUrl = file.url();
            page.setData({
              imgUrl
            })
            console.log(page.data.imgUrl);
          }
        ).catch(console.error);
      }
    });
  },

  previewMyImage: function (files) {
    wx.previewImage({
      current: '',
      urls: files 
    })
  },

  /**
   * Lifecycle function--Called when page load
   */


  createScooter: function (event) {
    console.log(event)
    // let id = this.data.user.id
    const id = 1
    let newScooter = {};
    newScooter.model = event.detail.value.model
    newScooter.top_speed = event.detail.value.top_speed
    newScooter.price = event.detail.value.price
    newScooter.location = event.detail.value.location
    newScooter.battery = event.detail.value.battery
    newScooter.year = event.detail.value.year
    newScooter.user_id = id
    newScooter.picture = this.data.imgUrl;
    console.log(newScooter.picture);
    console.log(newScooter)
    wx.request({
      url: host + `scooters/`,
      method: 'post',
      data: newScooter,
      success: function (res) {
        console.log(res)
        const id = res.data.user_id
        wx.switchTab({
          url: `/pages/user/user?id=${id}`,
        })
      }
    })
  },


  /**
   * Lifecycle function--Called when page is initially rendered
   */
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