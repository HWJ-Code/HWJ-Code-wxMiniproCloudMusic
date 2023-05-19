import { getSingerList } from "../../server/api-main-singer"

// pages/main-singer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  sendRequest(e) {
    getSingerList()
  }
})