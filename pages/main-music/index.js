import { getBanners } from "../../service/api-main-music"
import { queryRect } from "../../utils/queryRect"

// pages/main-music/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperHeight:0,
    banners:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBannnersData()
  },
  getBannnersData(){
    getBanners().then(res =>{
      this.setData({banners:res.banners})
    })
  },

  handleClickSearch() {
    console.log('跳转搜索页')
  },
  
  //监听图片加载完成
  handleLoadedBannerImg: wx.$_.throttle(function (){
    //获取图片高度
    queryRect('.banner-image').then(res =>{
     //，将swiper高度设置为图片高度，保持一致
     const imgHeight = res[0].height
      this.setData({swiperHeight:imgHeight})
   })
  },1000,{trailing:true})
})