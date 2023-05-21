import { hRequest } from './index'

//获取轮播图数据
export function getBanners() {
  return hRequest.get('/banner', {
   type:'android'
  })
}