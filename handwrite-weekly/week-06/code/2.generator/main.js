/**
 * Ajax简易封装GET请求
 * @param {string} url 请求地址
 * @return {promise} 返回 promise
 */

// 补充知识：Ajax 有 5个状态：
// UNSET - 代理被创建，还未调用 open 方法
// OPEND - open 方法被调用
// HEADERS_RECEIVED  send 方法被调用，并且已经获取头部和状态数据
// LOADING -  数据下载中
// DONE - 请求完成
function ajax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', url)
    xhr.onreadystatechange = function () {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          try {
            const json = JSON.parse(this.responseText)
            resolve(json)
          } catch (error) {
            reject(error)
          }
        }
      }
    }

    xhr.send()
  })
}

function* getData() {
  const res = yield ajax('./data/a.json')
  if (res.id === 1) {
    const res = yield ajax('./data/b.json')
    if (res.name === 'zhangsan') {
      const res = yield ajax('./data/c.json')
      console.log(res)
    }
  }
}

function run(gen) {
  const iterator = gen()

  function next(data) {
    const { done, value } = iterator.next(data)

    if (done) {
      return
    }

    value.then(next)
  }

  next()
}

run(getData)
