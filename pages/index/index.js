//index.js
//获取应用实例
const app = getApp()
const host = app.globalData.host;

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imageUrl: "https://images.unsplash.com/photo-1495608312049-285ae516323d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
  },
// BIND TAP TO CLICK CARD THROUGH TO SHOW PAGE
  tapCard: function (event) {
    console.log(event)
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`
    })
  },

  // END OF BIND TAP

  //事件处理函数
  
  onLoad: function (options) {

    let page = this;

  // // Get api data
  wx.request({
    url: host + "scooters",
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

  goToNewScooterPage: function(){
    wx.navigateTo({
      url: "/pages/scooter_create/scooter_create",
    })
  },

  scrollToDiv: function() {
    wx.pageScrollTo	({
      scrollTop: 380,
    })
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

