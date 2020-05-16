
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
    monthTab:[
      {
        id:0,
        month:'1月',
        isActive:false
      },        {
        id:1,
        month:'2月',
        isActive:false
      },        {
        id:2,
        month:'3月',
        isActive:false
      },      {
        id:3,
        month:'4月',
        isActive:false
      },      {
        id:4,
        month:'5月',
        isActive:false
      },      {
        id:5,
        month:'6月',
        isActive:false
      },      {
        id:6,
        month:'7月',
        isActive:false
      },      {
        id:7,
        month:'8月',
        isActive:true
      },      {
        id:8,
        month:'9月',
        isActive:false
      },      {
        id:9,
        month:'10月',
        isActive:false
      },      {
        id:10,
        month:'11月',
        isActive:false
      },      {
        id:11,
        month:'12月',
        isActive:false
      }
    ],
    imgSrc:[
      {
        id:0,
        source:"https://i.ibb.co/3Fr3tBS/MATCH1-2x.png"
      },
      {
        id:1,
        source:"https://i.ibb.co/YbYJpJn/MATCH2-2x.png"
      },
      {
        id:2,
        source:"https://i.ibb.co/jwpPHtq/MATCH3-2x.png"
      },
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
  },
  handleMonthTap(e){
    const index = e.target.id;
    let monthTab=this.data.monthTab;
    monthTab.forEach((v,i) => {
      v.id==index?v.isActive=true:v.isActive=false;
    });
    this.setData({
      monthTab:monthTab
    });
  }
})