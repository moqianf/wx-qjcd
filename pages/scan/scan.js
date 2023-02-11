// pages/scan/scan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasScan: false// false 还未跳转，true 已跳转一次
  },

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
    this.hasScan = false
  },
  onScancode: function (e) {
    if (!this.hasScan) {
      wx.navigateTo({
        url: '/pages/password/password',
        success: function(){
          this.hasScan = true
        }
      });
    }
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.hasScan = false
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