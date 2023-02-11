// pages/select/select.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgSrc:'/images/Star 1.png',
    randomNum: Math.random()*10,
    color:'#ffffff',
    selectData: [
      {time:'20分钟', money:0.5,imgIdx:2,id:1}, 
      {time:'1小时',  money:1,  imgIdx:3,id:2},
      {time:'2小时',  money:2,  imgIdx:3,id:3},
      {time:'3小时',  money:3,  imgIdx:4,id:4},
      {time:'12小时', money:5,  imgIdx:5,id:5} 
     ]
  },
  /**
   * 生命周期函数--监听页面加载
   */


  clickSelect(e){
    // if(e.target.)
    this.setData({
      key: e.currentTarget.dataset.index
    }),
    wx.navigateTo({
      url: '/pages/password/password'
    })
  },
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