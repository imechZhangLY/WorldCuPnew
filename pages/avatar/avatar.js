//获取应用实例
const app = getApp()
var interval
let icons = {
  cup: [{
    id: '',
    name: '',
    cupPath: '../../images/cup/cup.gif'
  }],
  football: [{
    id: '',
    name: '',
    footballPath: '../../images/football/football.jpeg'
  }],
  mascot: [{
    id: '',
    name: '',
    mascotPath: '../../images/mascot/mascot.jpeg'
  }],
  nations: [{
    id: '',
    name: '',
    emblemPath: '../../images/nations/Brazil_emblem.jpeg',
    flagPath: '../../images/nations/Brazil_flag.jpeg'
  }],
  others: [{
    id: '',
    name: '',
    othersPath: 'others'
  }]
}
let tagList = ['cup','football','mascot','emblem','flag','others']
let params = {
  canvasSize: []
}
let cards = [
  {
    "className": "card-left",
    "title": "A组",
    "icons": [
      "../../images/arge.png", "../../images/ause.png",
      "../../images/bele.png", "../../images/brae.png",
      "../../images/argf.png", "../../images/ausf.png",
      "../../images/belf.png", "../../images/braf.png",
      "../../images/cole.png", "../../images/crce.png",
      "../../images/croe.png", "../../images/dene.png",
      "../../images/colf.png", "../../images/crcf.png",
      "../../images/crof.png", "../../images/denf.png",
    ],
  },
  {
    "className": "card",
    "title": "B组",
    "icons": [
      "../../images/arge.png", "../../images/ause.png",
      "../../images/bele.png", "../../images/brae.png",
      "../../images/argf.png", "../../images/ausf.png",
      "../../images/belf.png", "../../images/braf.png",
      "../../images/cole.png", "../../images/crce.png",
      "../../images/croe.png", "../../images/dene.png",
      "../../images/colf.png", "../../images/crcf.png",
      "../../images/crof.png", "../../images/denf.png",
    ],
  },
  {
    "className": "card-right",
    "title": "C组",
    "icons": [
      "../../images/arge.png", "../../images/ause.png",
      "../../images/bele.png", "../../images/brae.png",
      "../../images/argf.png", "../../images/ausf.png",
      "../../images/belf.png", "../../images/braf.png",
      "../../images/cole.png", "../../images/crce.png",
      "../../images/croe.png", "../../images/dene.png",
      "../../images/colf.png", "../../images/crcf.png",
      "../../images/crof.png", "../../images/denf.png",
    ],
  },
  {
    "className": "card-righthidden",
    "title": "D组",
    "icons": [
      "../../images/arge.png", "../../images/ause.png",
      "../../images/bele.png", "../../images/brae.png",
      "../../images/argf.png", "../../images/ausf.png",
      "../../images/belf.png", "../../images/braf.png",
      "../../images/cole.png", "../../images/crce.png",
      "../../images/croe.png", "../../images/dene.png",
      "../../images/colf.png", "../../images/crcf.png",
      "../../images/crof.png", "../../images/denf.png",
    ],
  },
  {
    "className": "card-righthidden",
    "title": "E组",
    "icons": [
      "../../images/arge.png", "../../images/ause.png",
      "../../images/bele.png", "../../images/brae.png",
      "../../images/argf.png", "../../images/ausf.png",
      "../../images/belf.png", "../../images/braf.png",
      "../../images/cole.png", "../../images/crce.png",
      "../../images/croe.png", "../../images/dene.png",
      "../../images/colf.png", "../../images/crcf.png",
      "../../images/crof.png", "../../images/denf.png",
    ],
  },
  {
    "className": "card-righthidden",
    "title": "F组",
    "icons": [
      "../../images/arge.png", "../../images/ause.png",
      "../../images/bele.png", "../../images/brae.png",
      "../../images/argf.png", "../../images/ausf.png",
      "../../images/belf.png", "../../images/braf.png",
      "../../images/cole.png", "../../images/crce.png",
      "../../images/croe.png", "../../images/dene.png",
      "../../images/colf.png", "../../images/crcf.png",
      "../../images/crof.png", "../../images/denf.png",
    ],
  },
  {
    "className": "card-righthidden",
    "title": "G组",
    "icons": [
      "../../images/arge.png", "../../images/ause.png",
      "../../images/bele.png", "../../images/brae.png",
      "../../images/argf.png", "../../images/ausf.png",
      "../../images/belf.png", "../../images/braf.png",
      "../../images/cole.png", "../../images/crce.png",
      "../../images/croe.png", "../../images/dene.png",
      "../../images/colf.png", "../../images/crcf.png",
      "../../images/crof.png", "../../images/denf.png",
    ],
  },
  {
    "className": "card-righthidden",
    "title": "H组",
    "icons": [
      "../../images/arge.png", "../../images/ause.png",
      "../../images/bele.png", "../../images/brae.png",
      "../../images/argf.png", "../../images/ausf.png",
      "../../images/belf.png", "../../images/braf.png",
      "../../images/cole.png", "../../images/crce.png",
      "../../images/croe.png", "../../images/dene.png",
      "../../images/colf.png", "../../images/crcf.png",
      "../../images/crof.png", "../../images/denf.png",
    ],
  },
]

Page({
  data: {
    motto: 'Hello WorldCup, code changed',
    userInfo: null,
    avatarUrl: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    saveImage: null,
    getRequest: 'before',
    tagList: tagList,
    showIcons: icons.nations,
    currentTag: 'emblem',
    currentImage: '',
    selectedIcons: {},
    animationData: {},
    normalizedValue: null,
    bgImage: '../../images/background/Russian.png',
    isReady: false,
    cards: [],
    currentCard: 1,
    touchStart: 0,
    status: 'select'
  },

  //事件处理函数
  onLoad: function () {
    this.data.cards = cards;
    this.setData({ "cards": this.data.cards });
    var reg = /\d+$/
    var url = app.globalData.userInfo.avatarUrl.replace(reg, '0')
    console.log(url)
    //默认得到了用户信息
    //下载用户头像
    wx.downloadFile({
      url: url,
      //下载成功渲染页面
      success: res => {
        console.log(res),
        //让动画多播一段时间
        setTimeout(() => {
          //清除interval
          clearInterval(interval)
          //设置变量，页面内容更新
          this.setData({
            userInfo: app.globalData.userInfo,
            avatarPath: res.tempFilePath,
            isReady: true
          })
        }, 1500)
        //绘制用户头像
        //this.drawCanvas()
      }
    })
    if (app.globalData.userInfo) {
      console.log(66)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        avatarUrl: app.globalData.userInfo.avatarUrl
      })
      wx.downloadFile({
        url: app.globalData.userInfo.avatarUrl,
        success: res => {
          console.log(77)
        }
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log(11)
        wx.downloadFile({
          url: res.userInfo.avatarUrl,
          success: resTemp => {
            console.log(22)
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true,
              avatarUrl: resTemp.tempFilePath
            })
          }
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log(33)
          wx.downloadFile({
            url: res.userInfo.avatarUrl,
            success: resTemp => {
              console.log(44)
              app.globalData.userInfo = res.userInfo
              this.setData({
                userInfo: res.userInfo,
                hasUserInfo: true,
                avatarUrl: resTemp.tempFilePath
              })
            }
          })
        }
      })
    }

    if(app.globalData.systemInfo){
      this.setData({
        normalizedValue: app.globalData.systemInfo.screenWidth / 750
      })
      console.log('sys',this.data.normalizedValue)
    }else{
      app.systemInfoReadyCallback = res => {
        this.setData({
          normalizedValue: res.screenWidth / 750
        })
        console.log(this.data.normalizedValue)
      }
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      avatarUrl: e.detail.userInfo.avatarUrl
    })
    wx.downloadFile({
      url: app.globalData.userInfo.avatarUrl,
      success: res => {
        console.log(88)
      }
    })
  },
  drawCanvas: function (e) {
    let rate = this.data.normalizedValue
    let context = wx.createCanvasContext('userinfo-avatar1')
    context.drawImage(this.data.avatarUrl, 0, 0, 500 * rate, 500 * rate)
    for (let key in this.selectedIcons) {
      context.translate(this.selectedIcons[key].position[0] + this.selectedIcons[key].size[0] / 2, this.selectedIcons[key].position[1] + this.selectedIcons[key].size[1]/2)
      context.rotate(this.selectedIcons[key].rotate * Math.PI / 180)
      this.selectedIcons[key].path && context.drawImage(this.selectedIcons[key].path, -this.selectedIcons[key].size[0] / 2, -this.selectedIcons[key].size[1] / 2, this.selectedIcons[key].size[0], this.selectedIcons[key].size[1])
      context.rotate(-this.selectedIcons[key].rotate * Math.PI / 180)
      context.translate(-this.selectedIcons[key].position[0] - this.selectedIcons[key].size[0] / 2, -this.selectedIcons[key].position[1] - this.selectedIcons[key].size[1] / 2)  
    }
    context.draw()
    wx.request({
      url: 'https://sklang.cloudms.cn',
      method: 'POST',
      data: {
        selectedIcons: this.selectedIcons,
        userInfo: this.userInfo
      }
    })
  },

  saveCanvas: function(e) {
    let rate = this.data.normalizedValue
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 500*rate,
      height: 500*rate,
      destWidth: 500*rate,
      destHeight: 500*rate,
      canvasId: 'userinfo-avatar1',
      success: res => {
        console.log(res.tempFilePath)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath
        })
        this.setData({
          saveImage: res.tempFilePath
        })
      }
    })
  },
  saveAvatar: function(e){
    this.drawCanvas(e)
    this.saveCanvas(e)
  },
  switchTag: function(e) {
    let tagName = e.target.dataset.tagname
    let key = (tagName == 'emblem' || tagName == 'flag') ? 'nations' : tagName
    this.setData({
      currentTag: tagName,
      showIcons: icons[key]
    })
  },

  selectOrNot: function(e) {
    let rate = this.data.normalizedValue
    console.log(rate)
    let path = e.target.dataset.path
    this.selectedIcons = this.selectedIcons ? this.selectedIcons : {}
    this.selectedIcons[path] = this.selectedIcons[path] ? this.selectedIcons[path] : {}
    this.currentIcon = this.currentIcon ? this.currentIcon : path
    this.selectedIcons[path] = {
      path: this.selectedIcons[path].path ? null : path,
      position: [0, 0],
      size: [100*rate, 100*rate],
      rotate: 0
    }
    let tempArr = []
    for(let key in this.selectedIcons){
      this.selectedIcons[key].path ? tempArr.push(key) : ''
    }
    this.currentIcon = this.selectedIcons[path].path ? path : tempArr[tempArr.length-1]
    console.log(this.selectedIcons, this.currentIcon)
    this.setData({
      selectedIcons: this.selectedIcons
    })
  },

  getStartPosition: function(e) {
    this.startPositions = this.startPositions ? this.startPositions : {}
    this.startPositions[e.target.dataset.key] = this.startPositions[e.target.dataset.key] ? this.startPositions[e.target.dataset.key] : [e.touches[0].pageX, e.touches[0].pageY]
    this.currentIcon = e.target.dataset.key
  },

  move: function(e) {
    let rate = this.data.normalizedValue
    let [width,height] = this.selectedIcons[e.target.dataset.key].size
    let dX = e.touches[0].pageX - this.startPositions[e.target.dataset.key][0]
    let dY = e.touches[0].pageY - this.startPositions[e.target.dataset.key][1]
    console.log(dX,dY)
    this.selectedIcons[e.target.dataset.key].position = [dX + 0 > 300 - width ? 300 - width : (dX + 0 < 0 ? 0 : dX + 0), dY + 0 > 300 - height ? 300 - height : (dY + 0 < 0 ? 0 : dY + 0)]
    this.setData({
      selectedIcons: this.selectedIcons,
    })
    this.currentIcon = e.target.dataset.key
  },

  getEndPosition: function(e) {
    this.currentIcon = e.target.dataset.key
  },

  changeSize: function(e) {
    console.log(e)
    if(!this.currentIcon) return
    let speed = 10, ratio = this.selectedIcons[this.currentIcon].size[1] / this.selectedIcons[this.currentIcon].size[0]
    if (e.currentTarget.dataset.direction == '-'){
      this.selectedIcons[this.currentIcon].size = this.selectedIcons[this.currentIcon].size[0] < 11 ? this.selectedIcons[this.currentIcon].size : this.selectedIcons[this.currentIcon].size.map((item, index) => {return item - speed*(1-(1-ratio)*index)})
    }else{
      this.selectedIcons[this.currentIcon].size = this.selectedIcons[this.currentIcon].size[0] > 149 ? this.selectedIcons[this.currentIcon].size : this.selectedIcons[this.currentIcon].size.map((item, index) => {return item + speed * (1 - (1 - ratio) * index) })
    }
    this.setData({
      selectedIcons: this.selectedIcons
    })
  },

  iRotate: function(e) {
    console.log(e)
    if (!this.currentIcon) return
    let speed = 5
    this.selectedIcons[this.currentIcon].rotate += (e.currentTarget.dataset.direction == '+' ? -speed : speed)
    this.setData({
      selectedIcons: this.selectedIcons
    })
  },

  imageFromAlbum: function(e) {
    wx.chooseImage({
      count: 1,
      success: res => {
        this.setData({
          avatarUrl: res.tempFilePaths[0]
        })
        wx.uploadFile({
          url: 'https://sklang.cloudms.cn',
          filePath: res.tempFilePaths[0],
          name: 'imageFromAlbum',
        })
      }
    })
  },

  drawCircle(s, context) {
    var deltas = 0.1 * Math.PI
    context.clearRect(0, 0, 320, 160)
    context.setLineWidth(10)
    var style = ''
    for (var i = 0; i < 15; i++) {
      style = 'rgba(255, 255, 255, ' + (i / 15) + ')'
      context.setStrokeStyle(style)
      context.beginPath()
      context.arc(160, 80, 70, s + i * deltas, s + (1 + i) * deltas)
      context.stroke()
    }
    context.draw()

  },
  onReady: function () {
    var context = wx.createCanvasContext('loadCanvas')
    this.drawCircle(0, context)
    var i = 0 //闭包
    var v = 0.2 * Math.PI
    interval = setInterval(() => {
      i++
      this.drawCircle(v * i, context)
    }, 200)
  },

  touchStart: function (e) {
    this.setData({ touchStart: e.touches[0].pageX });
  },
  touchEnd: function (e) {
    //小于0向左，大于0向右
    let orientation = e.changedTouches[0].pageX - this.data.touchStart;
    let currentCard = this.data.currentCard;
    this.turnTo(orientation);
  },

  mypre: function (e) {
    this.turnTo(1);
  },
  mynext: function (e) {
    this.turnTo(-1);
  },
  test: function (e) {
    console.log(e);
  },
  turnTo: function (orientation) {
    let length = this.data.cards.length;
    let currentCard = this.data.currentCard;
    if (orientation < 0 && currentCard < length - 1) {
      if (currentCard - 1 >= 0) {
        this.data.cards[currentCard - 1].className = "card-lefthidden";
      }
      if (currentCard + 2 <= length - 1) {
        this.data.cards[currentCard + 2].className = "card-right";
      }
      this.data.cards[currentCard].className = "card-left";
      this.data.cards[currentCard + 1].className = "card";
      this.data.currentCard += 1;
    } else if (orientation > 0 && currentCard > 0) {
      if (currentCard + 1 <= length - 1) {
        this.data.cards[currentCard + 1].className = "card-righthidden";
      }
      if (currentCard - 2 >= 0) {
        this.data.cards[currentCard - 2].className = "card-left";
      }
      this.data.cards[currentCard].className = "card-right";
      this.data.cards[currentCard - 1].className = "card";
      this.data.currentCard -= 1;
    }
    this.setData({ "cards": this.data.cards });
  },

  editStatus: function(e){
    this.setData({
      status: 'edit'
    })
  },
  selectStatue: function(e){
    this.setData({
      status: 'select'
    })
  }
})

