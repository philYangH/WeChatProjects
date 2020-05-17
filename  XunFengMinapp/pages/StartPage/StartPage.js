// pages/StartPage/StartPage.js
var bmap = require('../../libs/bmap-wx.js')
Page({ 
  /**
   * 页面的初始数据
   */
  data: {
    num:21,
    status:'阴',
    windDetails:'东北风3级',
    wet:'湿度62%',
    weatherData:"",
    quickStartHidden:false,
  },
  handleQS(){
    const QSHidden=this.data.quickStartHidden;
    this.setData({
    quickStartHidden:!QSHidden
    });
  },
  getUserInfo(e){
    console.log(e)
  },
  goToSportGame:function(){
    wx.switchTab({
      url:"../Sport/Sport"
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() { 
    var that = this; 
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({ 
        ak: 'DjcDZqzoXC5qEuTjNtW8jrkof4VS75qj' 
    }); 
    var fail = function(data) { 
        console.log(data) 
    }; 
    var success = function(data) { 
        var weatherData = data.currentWeather[0]; 
        weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' +'日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' +'天气：' + weatherData.weatherDesc + '\n' +'风力：' + weatherData.wind + '\n'; 
        that.setData({ 
            weatherData: weatherData 
        }); 
    } 
    // 发起weather请求 
    BMap.weather({ 
        fail: fail, 
        success: success 
    }); 
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})