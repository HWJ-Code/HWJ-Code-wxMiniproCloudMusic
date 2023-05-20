import { getSingerList } from "../../service/api-main-singer"
import { SINGER_AREA, SINGER_TYPE } from '../../constant/index'

// pages/main-singer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //====歌手====
    singerArea: SINGER_AREA,
    singerType: SINGER_TYPE,
    areaId: '-1',
    typeId: '-1',
    singerListPage: 1, //第几页
    isMore: true, //是否还有下一页

    isLoading: false,
    singerList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSingerData()
  },
  //触发底部
  onReachBottom() {
    if (!this.data.isMore) return
    this.setData({ singerListPage: this.data.singerListPage + 1 })
    this.getSingerData(false)
  },

  handleClickArea(e) {
    const area = e.currentTarget.dataset.area
    this.setData({ areaId: area })
    this.getSingerData()
  },
  handleClickType(e) {
    const type = e.currentTarget.dataset.type
    this.setData({ typeId: type })
    this.getSingerData()
  },
  getSingerData(isReset = true) {
    if (isReset) {
      this.setData({ singerListPage: 1, singerList: [], isMore: true })
    }
    this.setData({ isLoading: true })
    //获取歌手列表
    getSingerList(this.data.areaId, this.data.typeId, this.data.singerListPage)
      .then(res => {
        this.setData({ singerList: this.data.singerList.concat(res.artists) })
      }).finally(() => {
        this.setData({ isLoading: false })
      })
  }
})