//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              wx.request({
                url: 'https://sklang.cloudms.cn',
                method: 'POST',
                data: {
                  userInfo: res
                }
              })
            }
          })
        }
      }
    })
    // 获取设备信息
    let res = wx.getSystemInfo({
      success: res => {
        this.globalData.systemInfo = res
        if (this.systemInfoReadyCallback) {
          this.systemInfoReadyCallback(res)
        }
        wx.request({
          url: 'https://sklang.cloudms.cn',
          method: 'POST',
          data: {
            systemInfo: res
          }
        })
      }
    })
    
  },
  globalData: {
    userInfo: null,
    systemInfo: null,
    currentMatch: null,
    flags: {
      "埃及": "1",
      "乌拉圭": "2",
      "沙特": "3",
      "俄罗斯": "4",
      "西班牙": "5",
      "摩洛哥": "6",
      "葡萄牙": "7",
      "伊朗": "8",
      "澳大利亚": "9",
      "法国": "10",
      "丹麦": "11",
      "秘鲁": "12",
      "冰岛": "13",
      "阿根廷": "14",
      "克罗地亚": "15",
      "尼日利亚": "16",
      "塞尔维亚": "17",
      "巴西": "18",
      "瑞士": "19",
      "哥斯达黎加": "20",
      "韩国": "21",
      "德国": "22",
      "瑞典":"23",
      "墨西哥": "24",
      "比利时": "25",
      "英格兰": "26",
      "巴拿马": "27",
      "突尼斯": "28",
      "塞内加尔": "29",
      "波兰": "30",
      "哥伦比亚": "31",
      "日本": "32"
    },
    userData: {
      userId: '',
      userName: '笑点在哪里',
      predictionCounts: 0,
      correctScoreCounts: 0,
      correctVictoryCounts: 0,
      beatUsers: '100%',
      matches: [
        {
          "id": 0,
          "name": ["俄罗斯", "沙特"],
          "time": {"day": "6-14", "hour": "23:00"},
          "score": [],
          "haveDone": 1,
          "group": "A",
          "mostPopularPrediction": [2, 0],
          "userPrediction": [2, 0]
        },
        {
          "id": 1,
          "name": ["埃及", "哥斯达黎加"],
          "time": {"day": "6-15", "hour": "20:00"},
          "score": [1, 2],
          "haveDone": 2,
          "group": "A",
          "mostPopularPrediction": [1, 2],
          "userPrediction": []
        },
        {
          "id": 2,
          "name": ["摩洛哥", "伊朗"],
          "time": {"day": "6-15", "hour": "23:00"},
          "score": [],
          "haveDone": 0,
          "group": "A",
          "mostPopularPrediction": [2, 0],
          "userPrediction": []
        }
      ]
    }
  }
})