//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show:false,
    runAM:false
  },
  onLoad: function () {

  },
  chanMask:function(){
    var isShow = this.data.show ? false : true;
    var delay  = isShow ? 30 : 1000;
    if(isShow){
      this.setData({
        show: isShow
      });
    }else{
      this.setData({
        runAM: isShow
      });
    }

    setTimeout(function(){
      if(isShow){
        this.setData({
          runAM: isShow
        });
      }else{
        this.setData({
          show: isShow
        });
      }
    }.bind(this), delay);
    
  }
})
