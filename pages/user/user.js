// pages/user/user.js
const app = getApp()
const host = app.globalData.host;

Page({

  /**
   * Page initial data
   */
  data: {
    scooters: [
      { picture: 'https://images.unsplash.com/photo-1521118702313-63fca89fe1fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=562&q=80', model: 'Yamaha Ray-Z' },
      { picture: 'https://images.unsplash.com/photo-1560693512-85fb8bc0c7a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80', model: 'TVS Jupiter' },
      { picture: 'https://images.unsplash.com/photo-1495608312049-285ae516323d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80', model: 'Suzuki Access 125' },
      { picture: 'https://images.unsplash.com/photo-1531166170349-20878432d2eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', model: 'TVS Wego' },
      { picture: 'https://images.unsplash.com/photo-1564163829854-541a559740b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80', model: 'Honda Activa' },
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // need this to call the id number from login
    let userId = options.id? options.id : 1;
    this.setData({
      userId
    })
    
    // const id = options.id
    // console.log(1, options)
    // console.log(options)

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  // onReady: function () {

  // },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    let page = this
    let id = this.data.userId || 1;
    wx.request({
      url: host + `users/${id}`,
      success: function (res) {
        const user = res.data
        // const scooters = user.scooters;
        const scooters = page.data.scooters;
        page.setData({ user, scooters })
      }
    })
  },

  /**
   * Lifecycle function--Called when page hide
   */
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

  // },

  addScooter: function (e) {
    let id = e.currentTarget.dataset.id
    console.log(e)
    wx.navigateTo({
      url: `/pages/scooter_create/scooter_create?id=${id}`,
    })
  },
// data-key="{{user.id}} sent over to create_scooter


  editScooter: function (e) {
    let id = e.currentTarget.dataset.id
    console.log(e)
    wx.navigateTo({
      url: `/pages/scooter_edit/scooter_edit?id=${id}`,
    })
  },
// data-key="{{user.scooter_id}}"

  editUser: function (e) {
    let id = e.currentTarget.dataset.id
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: `/pages/user_edit/user_edit?id=${id}`,
    })
  },
// data-key="{{user.id}}"

})