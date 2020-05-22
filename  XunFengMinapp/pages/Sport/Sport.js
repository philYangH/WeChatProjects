
Page({
  data: {
    myTimer:null,
    MatchTime:'00:00',
    PlaceSelectHidden:true,
    MatchHidden:false,
    portrait:"https://simgbb.com/avatar/mF5L62SbkbSy.png",
    UserName:"testUser",
    footballPos:['左边锋','左中场'],
    footballPosScore:['99','98'],
    basketballPos:['控球后卫',"大前锋"],
    basketballPosScore:['80','81'],
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
        source:"https://s1.ax1x.com/2020/05/19/YIbuKs.png"
      },
      {
        id:1,
        source:"https://s1.ax1x.com/2020/05/19/YIbmvj.png"
      },
      {
        id:2,
        source:"https://s1.ax1x.com/2020/05/19/YIbKrn.png"
      },
    ],  
  },
  loadingTime:function(){
      clearInterval(this.data.myTimer);
      var that=this;
      const temp=this.data.MatchHidden;
      this.setData({
        MatchHidden:!temp
      });
      var startTime=Date.parse(new Date());
        this.data.myTimer=setInterval(function(){
          that.countTime(startTime)},1000);
    },
  countTime:function(startTime){
      var nowTime=Date.parse(new Date());
      var MatchTime = nowTime-startTime;
      var that = this;
      if(!this.MatchHidden){
        var m = Math.floor(MatchTime/ 1000 / 60 % 60);
        var s = Math.floor(MatchTime/ 1000 % 60);
        m = m<10?'0'+m:m;
        s = s<10?'0'+s:s;       
        this.setData({
          MatchTime:m+":"+s
        })
        
      };
    },
  handleSelectPlace(){
   const temp=this.data.PlaceSelectHidden;
   this.setData({
     PlaceSelectHidden:!temp
   });
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