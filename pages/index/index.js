//index.js
//获取应用实例
var app = getApp();
var wxsessionKey, encodeData = {};
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getWeiXinSteps: function() {
    wx.getWeRunData({
      success(res) {
        const encryptedData = res.encryptedData;
        console.log(encryptedData);
        wx.request({
          url: 'http://10.50.115.15:30040/mama100-wxsp/wxsp/auth/decodeUserInfo', //仅为示例，并非真实的接口地址
          data: {
            encryptedData: encryptedData,
            iv: encodeData.iv,
            sessionId: encodeData.sessionId
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            console.log(res.data)
          }
        })
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    wx.login({
      success: function (res_login) {
        if (res_login.code) {
          //请求获取wxsession_key     
          wx.request({
            url: 'http://10.50.115.15:30040/mama100-wxsp/wxsp/auth/getSession',
            data: {
              //微信js_code  
              code: res_login.code
            },
            method: 'GET',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              wxsessionKey = res.data.data.sessionId
              console.log(wxsessionKey)
            }
          })
          wx.getUserInfo({
            withCredentials: true,
            success: function (res_user) {
              encodeData = {
                code: res_login.code,
                encryptedData: res_user.encryptedData,
                iv: res_user.iv,
                sessionId: wxsessionKey
              }
              that.setData({
                userInfo: res_user.userInfo
              })
              
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
    
  }
})
