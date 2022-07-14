// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    ms:{}
  },
  onLoad() {
    this.getMsObject()
  },
  // 请求ms数据
  getMsObject() {
    wx.request({
      url:'https://api.ggt1024.com/mdb/v220601/GetMs',
      data:{
        id:'1234511972993601536'
      },
      method:"POST",
      success:(res) => {
        this.setData({
          ms:res
        })
        console.log(res)
      }
    })
  },
  // 事件处理函数
  bindViewTap() {
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
