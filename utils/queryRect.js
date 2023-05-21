export function queryRect(elSelect){
  return new Promise((resolve) =>{
    const query = wx.createSelectorQuery()
    query.select(elSelect).boundingClientRect()
    query.exec(function(res){
      resolve(res)
    })
  })

}