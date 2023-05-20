const BASE_URL = 'https://coderwhy-music.vercel.app'
const TIMEOUT = 10000

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
        timeout: TIMEOUT,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          resolve(res.data)
        },
        fail(err) {
          wx.showToast({
            title: err,
          })
          rejecet(err)
        }
      })
    })
  }
  get(api, params) {
    return this.request(api, 'GET', params)
  }
  post(api, params) {
    return this.request(api, 'POST', params)
  }
}

export const hRequest = new ServerRequest(BASE_URL)