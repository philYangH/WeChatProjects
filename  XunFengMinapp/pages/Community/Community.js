// pages/CommunityHot/CommunityHot.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"热门",
        isActive:false
      },
      {
        id:1,
        name:"关注",
        isActive:false
      },
      {
        id:2,
        name:"商城",
        isActive:true
      }
    ]
  },
  handleItemChange(e){
    const {index} =e.detail;
    let {tabs} =this.data;
    tabs.forEach((v,i) => {
      i===index?v.isActive=true:v.isActive=false;        
    });
    this.setData({
      tabs
    });
  }
})