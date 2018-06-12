const app = getApp()

Page({
	data: {
		match: null,
		date: '',
		path: '../../images/a_',
		flags: [],
		mostPopularPrediction: [],
		userPrediction: {
			userId: '',
			userName: '',
			match: {
				id: undefined,
				score: []
			}
		},
	},
	onReady: function() {
		var currentMatch = app.globalData.currentMatch
		var day = currentMatch.time.day
		var hour = currentMatch.time.hour
		var temp1 = day.split('-')
		var tempdate = temp1[0] + '月' + temp1[1] + '日' + hour
		console.log(tempdate)
		this.setData({
			match: app.globalData.currentMatch,
			date: tempdate,
			flags: [app.globalData.flags[currentMatch.name[0]], app.globalData.flags[currentMatch.name[1]]],
			mostPopularPrediction: currentMatch.mostPopularPrediction
		})
		this.data.userPrediction.userId = app.globalData.userData.userId
		this.data.userPrediction.userName = app.globalData.userData.userName
		this.data.userPrediction.match.id = this.data.match.id
	},
	saveImage: function() {
		console.log(this.data.userPrediction)
		if(this.data.match.haveDone === 0){
			if(this.data.userPrediction.match.score.length === 2){
				this.data.match.haveDone = 1
				this.sendDataToBackend(this.data.userPrediction)
			}
		}
		console.log(this.data.match.haveDone)
		if(this.data.match.haveDone !== 0) {
			this.drawImage()
		}else {
			wx.showToast({
				title: "为进行任何预测",
				duration: 1000,
				image: '../../images/failure.jpg'
			})
		}
	},
	sendDataToBackend: function(userPrediction) {
		//代码
		console.log(this.data.userPrediction)
	},
	drawImage: function() {
		//代码
		console.log('画图')
	},
	updateScore: function(event) {
		var index = event.currentTarget.dataset.id
		console.log(index)
		this.data.userPrediction.match.score[index] = event.detail.value
	}
})