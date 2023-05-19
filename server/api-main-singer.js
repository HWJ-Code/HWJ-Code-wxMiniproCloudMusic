import {hRequest} from './index'

function getSingerList() {
  hRequest.get('/artist/list').then(res =>{
    console.log(res)
  })
}

export {
  getSingerList,
}