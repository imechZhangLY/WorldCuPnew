//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userId: '',
    userName: '',
    predictionCounts: 0,
    correctScoreCounts: 0,
    correctVictoryCounts: 0,
    beatUsers: '',
    matches:[],
    flags: null,
    folder: '../../images/',
    userPrediction: null
  },

  //点击进入比赛预测界面
  prediction: function(event) {
    app.globalData.currentMatch = event.currentTarget.dataset.match
    wx.navigateTo({
      url: '../score/score'
    })
  },
  onReady: function () {
    const userData = app.globalData.userData
    this.setData({
      userId: userData.userId,
      userName: userData.userName,
      predictionCounts: userData.predictionCounts,
      correctScoreCounts: userData.correctScoreCounts,
      correctVictoryCounts: userData.correctVictoryCounts,
      beatUsers: userData.beatUsers,
      matches: userData.matches,
      flags: app.globalData.flags
    })
  },

  onLoad: function () {}
})
