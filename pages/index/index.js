// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  gotoSelect(){
    wx.navigateTo({
      url: '/pages/scan/scan',
    })
  },
  // getOpenid(){
  //   wx.cloud.callFunction({
  //     name:"pay",
  //     success(res){
  //       console.log("获得成功",res)
  //     },
  //     fall(err) {
  //       console.log('获取失败',err)
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})