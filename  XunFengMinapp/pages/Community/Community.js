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
    ],
    cataUrl:[
      'https://i.ibb.co/g9Y2vV0/ticket-2x.png',
      'https://i.ibb.co/RcB2mZV/equipment-2x.png',
      'https://i.ibb.co/k6xhpjh/new-2x.png',
      'https://i.ibb.co/FD3nWXW/relate-2x.png',
      'https://i.ibb.co/mzD5Jrs/others-2x.png'
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