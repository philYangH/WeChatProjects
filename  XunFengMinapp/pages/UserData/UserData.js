// pages/UserData/UserData.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addFootballDisabled:true,
    addBasketballDisabled:true,
    inputDisabled:true,
    height:'182cm',
    weight:'60kg',
    fat:'17%',
    chestCircumstance:'未填',
    waistLine:'未填',
    footballPos:['左边锋','左中场'],
    footballPosScore:[99,98],
    basketballPos:['控球后卫',"大前锋"],
    basketballPosScore:[80,81]
  },
  addFootball:function(){
    this.setData({
    footballPos:getApp().globalData.footballPos,
    footballPosScore:getApp().globalData.footballPosScore,
    addFootballDisabled:!this.data.addFootballDisabled,
    })
  },
  addBasketball:function(){
    this.setData({
    basketballPos:getApp().globalData.basketballPos,
    basketballPosScore:getApp().globalData.basketballPosScore,
    addBasketballDisabled:!this.data.addBasketballDisabled,
    })
  },
  addFootballPos:function(e){
    getApp().globalData.footballPos.push(e.detail.value);
  },
  addFootballScore:function(e){
    getApp().globalData.footballPosScore.push(e.detail.value);
  },
  addBasketballPos:function(e){
    getApp().globalData.basketballPos.push(e.detail.value);
  },
  addBasketballScore:function(e){
    getApp().globalData.basketballPosScore.push(e.detail.value);
  },
  saveHeight:function(e){
    getApp().globalData.height=e.detail.value;
  },
  saveWeight:function(e){
    getApp().globalData.weight=e.detail.value;
  },
  saveFat:function(e){
    getApp().globalData.fat=e.detail.value;
  },
  saveHeight:function(e){
    getApp().globalData.height=e.detail.value;
  },
  saveHeight:function(e){
    getApp().globalData.height=e.detail.value;
  },
  saveChest:function(e){
    getApp().globalData.chestCircumstance=e.detail.value;
  },
  saveWaistLine:function(e){
    getApp().globalData.waistLine=e.detail.value;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  bindSaveInfo:function(){
    this.setData({
      inputDisabled:true
    })
  },
  bindModifyInfo:function(){
    this.setData({
    inputDisabled:false
    })
  },
  onLoad: function (options) {
    this.setData({
      inputDisabled:getApp().globalData.inputDisabled,
      height:getApp().globalData.height,
      weight:getApp().globalData.weight,
      fat:getApp().globalData.fat,
      chestCircumstance:getApp().globalData.chestCircumstance,
      waistLine:getApp().globalData.waistLine,
      footballPos:getApp().globalData.footballPos,
      footballPosScore:getApp().globalData.footballPosScore,
      basketballPos:getApp().globalData.basketballPos,
      basketballPosScore:getApp().globalData.basketballPosScore
    })
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