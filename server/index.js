const BASE_URL = 'https://coderwhy-music.vercel.app'

class ServerRequest {
  constructor(BASE_URL) {
    this.BASE_URL = BASE_URL
  }
  request(api, method, params) {
    return new Promise((resolve, rejecet) => {
      wx.request({
        url: this.BASE_URL + api,
        data: params,
        method,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log(res)
          resolve(res)
        },
        fail(err) {
          console.log(err)
          rejecet(err)
        }
      })
    })
  }
  get(api, params) {
    return this.request(api, 'GET', params)
  }
  get(api, params) {
    return this.request(api, 'POST', params)
  }
}

const hRequest = new ServerRequest(BASE_URL)
export {
  hRequest,
}