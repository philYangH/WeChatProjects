
Page({
  data: {
    tabs:[
      {
        id:0,
        name:"比赛",
        isActive:true
      },
      {
        id:1,
        name:"记录",
        isActive:false
      }
    ],
  },

  handleItemChange(e){
    const {index} =e.detail;
    let tabs =this.data.tabs;
    tabs.forEach((v,i) => {
      i===index?v.isActive=true:v.isActive=false;        
    });
    this.setData({
      tabs:tabs
    });
  }
})