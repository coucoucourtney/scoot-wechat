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
        // when submit the form add this function
        // new AV.File('file-name', {
        //   blob: {
        //     uri: tempFilePath,
        //   },
        // }).save().then(
        //   file => console.log(file.url())
        // ).catch(console.error);
      }
    });
  },

  previewMyImage: function (files) {
    wx.previewImage({
      current: '',  // number of index or file path
      urls: files  // Array of temp files
    })
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