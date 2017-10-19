// home.js
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
    memberNum: 12345
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
  onReady: function () {},

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
      url: 'https://wx.qlogo.cn/mmopen/vi_32/nUB9lOWn8HMSCoyywLbqicdH7atzzghAeh0vs2EKkO3aqDBLtR9dNZGQficLiaRWVAZugQ0kicCeY3iaEEZGoOcfqSg/0',
      success: function(res) {
          // that.setData({
          //   images: res.tempFilePath
          // });
          ctx.setFillStyle('white')
          ctx.fillRect(0, 0, 300, 300)

          ctx.save()
          ctx.beginPath()
          ctx.arc(50, 50, 25, 0, 2*Math.PI)
          ctx.clip()
          ctx.drawImage(res.tempFilePath, 25, 25,50,50);
          ctx.restore()
          ctx.draw()
          ctx.drawImage('https://weixin.mama100.cn/wmall/activity/2017/20170623_sevenDaysCrashClass/images/share.jpg', 0, 150, 150, 100)
          ctx.setFontSize(20);
          ctx.setFillStyle('#abcabc');
          ctx.fillText('Hello',150,20);
          ctx.setFontSize(60);
          ctx.setFillStyle('red');
          ctx.fillText('world',150,40);
          ctx.save();
          ctx.draw(true);
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
    // wx.canvasToTempFilePath({
    //   canvasId: 'myCanvas',
    //   success: function(res) {
    //     wx.saveImageToPhotosAlbum({
    //       filePath: res.tempFilePath,
    //       success: function (res1) {
    //         console.log(JSON.stringify(res1));
    //         // success
    //       },
    //       fail: function () {
    //         // fail
    //       },
    //       complete: function () {
    //         // complete
    //       }
    //     })
    //   },
    //   fail: function(res) {
    //     console.log('baocunshibai');
    //     console.log(res);
    //   }
    // })
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
  },

  startRun: function() {
    wx.redirectTo({
      url: '../home/home'
    })
  }
})