Promise.myAll = function (iterators) {
  return new Promise((resolve, reject) => {
    const promises = Array.from(iterators)
    let count = 0
    const result = []

    for (let i = 0; i < promises.length; i++) {
      const item = promises[i]
      Promise.resolve(item)
        .then((res) => {
          result[i] = res
          count++

          if (count === promises.length) {
            resolve(result)
          }
        })
        .catch((err) => reject(err))
    }
  })
}

Promise.myAllSettled = function (promiseArray) {
  let counter = 0
  let len = promiseArray.length
  let result = []
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArray)) {
      return reject(new Error('必须传入数组类型'))
    }
    promiseArray.forEach((promise, idx) => {
      promise
        .then((res) => {
          result[idx] = {
            status: 'fulfilled',
            value: res,
          }
          counter++
          if (counter === len) {
            resolve(result)
          }
        })
        .catch((err) => {
          result[idx] = { reason: err, status: 'rejected' }
          counter++
          if (counter === len) {
            resolve(result)
          }
        })
    })
  })
}

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    for (const p of promises) {
      Promise.resolve(p).then(resolve).catch(reject)
    }
  })
}

Promise.myAny = function (arr) {
  let count = 0
  return new Promise((resolve, reject) => {
    if (!arr.length) {
      return
    }
    arr.forEach((item) => {
      Promise.resolve(item).then(resolve, (r) => {
        if (++count === arr.length) {
          reject(new Error(r))
        }
      })
    })
  })
}

{
  const promise1 = Promise.resolve(3)
  const promise2 = 42
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo')
  })

  Promise.myAll([promise1, promise2, promise3]).then((values) => {
    console.log(values)
  })
  // expected output: Array [3, 42, "foo"]
}

{
  const promise1 = Promise.resolve(3)
  const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, 'foo'),
  )
  const promises = [promise1, promise2]

  Promise.myAllSettled(promises).then((results) =>
    results.forEach((result) => console.log(result.status)),
  )

  // expected output:
  // "fulfilled"
  // "rejected"
}

{
  const pErr = new Promise((resolve, reject) => {
    reject('总是失败')
  })

  const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, '最终完成')
  })

  const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, '很快完成')
  })

  Promise.myAny([pErr, pSlow, pFast]).then((value) => {
    console.log(value)
    // pFast fulfils first
  })
  // 期望输出："很快完成"
}

{
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one')
  })

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two')
  })

  Promise.myRace([promise1, promise2]).then((value) => {
    console.log(value)
    // Both resolve, but promise2 is faster
  })
  // expected output: "two"
}
