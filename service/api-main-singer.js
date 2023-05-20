import { hRequest } from './index'

//获取热门歌手
export function getSingerList(area, type, page = 1, limit = 30,) {
  return hRequest.get('/artist/list', {
    area, type, limit, offset: (page - 1) * limit
  })
}