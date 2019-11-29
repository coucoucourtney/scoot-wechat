// pages/scooter_edit/scooter_edit.js
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
            console.log(file.url());
            let imgUrl = file.url();
            page.setData({
              imgUrl
            })
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

  editScooter: function (event) {
    console.log(event)
    let id = this.data.user.id
    let editScooter = {};
    editScooter.model = event.detail.value.model
    editScooter.year = event.detail.value.year
    editScooter.battery = event.detail.value.battery
    editScooter.top_speed = event.detail.value.top_speed
    editScooter.location = event.detail.value.location
    editScooter.price = event.detail.value.price
    editScooter.picture = this.data.imgUrl;
    wx.request({
      url: host + `users/${id}`,
      method: 'patch',
      data: editScooter,
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
