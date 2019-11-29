//app.js
const config = require('./key');

// // Initialization of the app
const AV = require('./utils/av-weapp-min.js');
  AV.init({
  appId: config.appId,
  appKey: config.appKey,
  serverURLs: 'https://haad5d2x.lc-cn-n1-shared.com/'
});

App({
  onLaunch: function () {
    // wx.BaaS = requirePlugin('sdkPlugin')
    // wx.BaaS.init('11ca705d4ea9e8e90332')
  //   const host = 'http://localhost:3000/'
  //   console.log('beginning login')
  //   wx.login({
  //     success: (res) => {
  //       console.log(res)
  //       // insert next code here
  //       wx.request({
  //         url: host + 'login',
  //         method: 'post',
  //         data: {
  //           code: res.code
  //         },
  //         // insert next code here
  //         success: (res) => {
  //           console.log(res)
  //           this.globalData.userId = res.data.userId
  //         }
  //       })
  //     }
  //   })
  },
  
  globalData: {
    // host: "http://localhost:3000/"
    host: "https://rent-scoot.herokuapp.com/api/v1/"
  }
})

