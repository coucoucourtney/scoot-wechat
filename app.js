//app.js
const config = require('./key');

// // Initialization of the app
const AV = require('./utils/av-weapp-min.js');
AV.init({
  appId: config.appId,
  appKey: config.appKey,
  serverURLs: 'https://goupodwo.lc-cn-n1-shared.com'
});

App({
  globalData: {
    // host: "http://localhost:3000/"
    host: "https://rent-scoot.herokuapp.com/api/v1/"
  }
})

