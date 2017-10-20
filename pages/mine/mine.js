// home.js
var app = getApp();
console.log(app.globalData.userInfo);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerObj: {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      imgUrls: ['http://img2.mama100.com/order-point/banner/1502848747777.jpg', 'http://img2.mama100.com/order-point/banner/1502848747777.jpg']
    },
    images:'',
    todayStep: 12399,
    allStep: 11101010,
    firstTransform: 'rotate(0deg)',
    secondTransform: 'rotate(0deg)',
    borderColor:"white white white transparent",
    stepNum: 12313,
    dayNum:7,
    userInfo: {}
  },

  goToPage: function (event) {
    console.log(event)
    wx.navigateTo({url: event.currentTarget.dataset.url})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(this.data.headUrl);
    console.log(app);
    this.setData({
      userInfo: app.globalData.userInfo
    });
    var val = 10;
    if (val <= 50){
        this.setData({
          secondTransform: "rotate(" + 180 * val * 2 / 100 + "deg)",
          borderColor:'white white white transparent',
          firstTransform: "rotate(0deg)"
        });
        // bg2.style.transform = "rotate(" + 180 * val * 2 / 100 + "deg)";
        // bg2.style.borderColor = "white white white transparent";
        // bg1.style.transform = "rotate(0deg)";
    }else{
      this.setData({
        secondTransform: "rotate(0deg)",
        borderColor:'red red red transparent',
        firstTransform: "rotate(" + 180 * (val - 50) * 2 / 100 + "deg)"
      });
        // bg2.style.transform = "rotate(0deg)";
        // bg2.style.borderColor = "red red red transparent";
        // bg1.style.transform = "rotate(" + 180 * (val - 50) * 2 / 100 + "deg)";
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  onItemClick: function (event) {
    var that = this;
    const ctx = wx.createCanvasContext('myCanvas');
    wx.downloadFile({
      // url: 'http://is5.mzstatic.com/image/thumb/Purple128/v4/75/3b/90/753b907c-b7fb-5877-215a-759bd73691a4/source/50x50bb.jpg',
      url: that.data.userInfo.avatarUrl,
      success: function(res) {
          // that.setData({
          //   images: res.tempFilePath
          // });
          ctx.setFillStyle('white')
          ctx.fillRect(0, 0, 300, 300)
          ctx.save()
          ctx.beginPath()
          ctx.arc(35, 220, 25, 0, 2*Math.PI)
          ctx.clip()
          ctx.drawImage(res.tempFilePath, 10, 195,50,50);
          ctx.restore()
          ctx.drawImage('../../images/share.png',10, 10,280,171);
          // ctx.draw()
          ctx.setFontSize(12);
          ctx.setFillStyle('gray');
          ctx.fillText(that.data.userInfo.nickName,30,260);
          ctx.setFillStyle('black');
          ctx.fillText('正在参加Swisse21天打卡计划',60,195);
          ctx.setFillStyle('gray');
          ctx.fillText('今天步数',60,210);
          ctx.setFillStyle('red');
          ctx.fillText(that.data.todayStep,115,210);
          ctx.setFillStyle('gray');
          ctx.fillText('步',160,210);
          ctx.setFillStyle('gray');
          ctx.fillText('已坚持',60,245);
          ctx.setFillStyle('red');
          ctx.fillText(that.data.dayNum,105,245);
          ctx.setFillStyle('gray');
          ctx.fillText('天，一共跑了',120,245);
          ctx.setFillStyle('red');
          ctx.fillText(that.data.allStep,60,260);
          ctx.setFillStyle('gray');
          ctx.fillText('步',115,260);
          ctx.drawImage('../../images/code.png', 230, 195, 60, 60)
          ctx.save();
          ctx.draw(true);
          wx.canvasToTempFilePath({
            canvasId: 'myCanvas',
            success: function(res) {
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: function (res1) {
                  console.log(JSON.stringify(res1));
                  // success
                },
                fail: function () {
                  // fail
                },
                complete: function () {
                  // complete
                }
              })
            },
            fail: function(res) {
              console.log('baocunshibai');
              console.log(res);
            }
          })
      }
    })
    // const ctx = wx.createCanvasContext('myCanvas');
    // ctx.setFillStyle('white')
    // ctx.fillRect(0, 0, 300, 300)
    // ctx.drawImage('../../images/banner.jpg', 0, 0, 150, 100);
    // ctx.drawImage('https://weixin.mama100.cn/wmall/activity/2017/20170623_sevenDaysCrashClass/images/share.jpg', 0, 150, 150, 100)
    // ctx.setFontSize(20);
    // ctx.setFillStyle('#abcabc');
    // ctx.fillText('Hello',150,20);
    // ctx.setFontSize(60);
    // ctx.setFillStyle('red');
    // ctx.fillText('world',150,40);
    // ctx.save();
    // ctx.draw();
    wx.canvasToTempFilePath({
      canvasId: 'myCanvas',
      success: function(res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function (res1) {
            console.log(JSON.stringify(res1));
            // success
          },
          fail: function () {
            // fail
          },
          complete: function () {
            // complete
          }
        })
      },
      fail: function(res) {
        console.log('baocunshibai');
        console.log(res);
      }
    })
  },
  onItemClick1: function (event) {
    var mUrl = "";
    if (event.currentTarget.dataset.url != null) 
      mUrl = event.currentTarget.dataset.url;
    console.log("download：" + mUrl);
    wx.downloadFile({
      url: mUrl,
      type: 'image',
      success: function (res) {
        console.log(res);
        wx.saveImageToPhotosAlbum({
          filePath: '../../images/goods.jpg',
          // filePath: res.tempFilePath,
          success: function (res1) {
            console.log(JSON.stringify(res1));
            // success
          },
          fail: function () {
            // fail
          },
          complete: function () {
            // complete
          }
        })
        // console.log(res.tempFilePath); that.setData({hidden: true, toastHidden:
        // false, toastText: "恭喜你，图片保存成功"});
      },
      fail: function (res) {
        console.log("download fail");
        // that.setData({hidden: true, toastHidden: false, toastText: "保存失败，请稍后再试"});
      },
      complete: function (res) {
        console.log("download complete");
      }
    })
  }
})