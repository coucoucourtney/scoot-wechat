//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数

  // // FONT - UBUNTU
  // loadFontFace() {
  //   console.log("loading font")
  //   const self = this
  //   wx.loadFontFace({
  //     family: this.data.fontFamily,
  //     source: 'url("https://fonts.googleapis.com/css?family=Ubuntu:400,500i&display=swap")',
  //     success(res) {
  //       console.log(res.status)
  //       self.setData({ loaded: true })
  //     },
  //     fail: function (res) {
  //       console.log(res.status)
  //     },
  //     complete: function (res) {
  //       console.log(res.status)
  //     }
  //   });
  // },

  switchToShowPage: function () {
    wx.switchTab({
      url: '/pages/show/show'
    })
  },

  switchToBookingCreatePage: function () {
    wx.switchTab({
      "pages/booking_create/booking_create",
      url: ''
    })
  },

  switchToScooterCreatePage: function () {
    wx.switchTab({
      url: 'pages/scooter_create/scooter_create'
    })
  },

  onLoad: function (options) {
    this.loadFontFace()
  //   let page = this;
	// ...

  // // Get api data
  // wx.request({
  //   url: "http://localhost:3000/api/v1/scooters",
  //   method: 'GET',
  //   success(res) {
  //     const scooters = res.data.scooters;

  //     // Update local data
  //     page.setData({
  //       scooters: scooters
  //     });

  //     wx.hideToast();
  //     }
    // });
},

    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  // },
});

