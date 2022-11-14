// 题目需求

let middleware = []

middleware.push((next) => {
  console.log(1)
  next()
  console.log(1.1)
})

middleware.push((next) => {
  console.log(2)
  next()
  console.log(2.1)
})

middleware.push((next) => {
  console.log(3)
  next()
  console.log(3.1)
})

let fn = compose(middleware)
fn()

/*
1
2
3
3.1
2.1
1.1
*/

//实现compose函数
function compose(middlewares) {
  if (Array.isArray(middlewares)) {
    throw new Error(`${middlewares} must be a array`)
  }

  for (const fn of middlewares) {
    if (typeof fn !== 'function') {
      throw new Error(`${fn} must be a function`)
    }
  }

  return function () {
    function dispatch(i) {
      if (i === middlewares.length) {
        return Promise.resolve()
      }

      let current = middlewares[i]

      try {
        // 执行当前中间件
        return Promise.resolve(current(dispatch.bind(null, ++i)))
      } catch (error) {
        return Promise.reject(error)
      }
    }

    return dispatch(0)
  }
}
