import { hRequest } from './index'

//获取轮播图数据
export function getBanners() {
  return hRequest.get('/banner', {
   type:'android'
  })
}

//获取推荐歌单列表
export function getRecommendedList(area, type, page = 1, limit = 30,) {
  return hRequest.get('/artist/list', {
    area, type, limit, offset: (page - 1) * limit
  })
}