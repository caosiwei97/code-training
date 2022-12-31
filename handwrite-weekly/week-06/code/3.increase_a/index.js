// 浏览器环境执行

// 方法一：
let a = {
  val: 0,
  valueOf() {
    return ++a.val
  },
}

// 方法二：
let val = 0
Object.defineProperty(window, 'a', {
  get() {
    return ++val
  },
})
