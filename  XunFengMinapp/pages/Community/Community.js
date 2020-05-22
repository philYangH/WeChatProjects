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
        isActive:true
      },
      {
        id:1,
        name:"关注",
        isActive:false
      },
      {
        id:2,
        name:"商城",
        isActive:false
      }
    ],
    cataUrl:[
  'https://s1.ax1x.com/2020/05/19/YIqVdx.png',
  'https://s1.ax1x.com/2020/05/19/YIL19U.png',
'https://s1.ax1x.com/2020/05/19/YIqmFK.png',
'https://s1.ax1x.com/2020/05/19/YIqEe1.png',
'https://s1.ax1x.com/2020/05/19/YIqZo6.png'
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
  },
  getSerach:function(){

  }
})