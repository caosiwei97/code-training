## 1.防抖/节流大礼包

测试用到的 DOM 使用上一次的 [lazyload](../week-02/code/lazyLoad.html)

```js
/**
 * @params fun 目标函数
 * @params wait 等待的时间
 * @params immediate 是否立即执行
 */
function debounce(fun, wait, immediate = false) {}

/**
 * @params fun 目标函数
 * @params delay 间隔的时间
 */
function throttle(fun, delay) {}

function sendAjax() {
  console.log('发送请求中...')
}

const debounceSendAjax = debounce(sendAjax, 1000)

document.addEventListener('scroll', debounceSendAjax)
```

## 2.实现 lazyMan

实现一个 LazyMan，可以按照以下方式调用:

```js
LazyMan(“Hank”)
// Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)
// Hi! This is Hank!
// 等待10秒..
// Wake up after 10
// Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)
// Hi This is Hank!
// Eat dinner~
// Eat supper~

LazyMan(“Hank”).sleepFirst(5).eat(“supper”)
// 等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
```

## 3.虚拟 DOM 转真实 DOM

```js
const vnode = {
  tag: 'DIV',
  attrs: {
    id: 'app',
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        {
          tag: 'A',
          children: [],
        },
      ],
    },
    {
      tag: 'SPAN',
      children: [
        {
          tag: 'A',
          children: [],
        },
        {
          tag: 'A',
          children: [],
        },
      ],
    },
  ],
}

function render(vnode) {}

// 调用 render 后将元素插入 body 下面
```

## 4.场景设计

下面的场景设计二选一。

### 场景一：设计一个 `Promise.retry`。

`Promise.retry` 作用是成功后 `resolve` 结果，失败后重试，尝试超过一定次数才真正的 `reject` 。

```js
/**
 * @params promiseFn 用户要处理的业务函数，该函数返回 Promise
 * @params times 错误时重试的次数
 */
Promise.retry = function (promiseFn, times = 3) {}
function getProm() {
  const n = Math.random()
  return new Promise((resolve, reject) => {
    setTimeout(() => (n > 0.9 ? resolve(n) : reject(n)), 1000)
  })
}
Promise.retry(getProm)
```

### 场景二：设计一个截图功能

前端实现截图的几种方案以及区别，写出伪代码。

## 5.二叉树层序遍历（超高频）

leetcode 原题：[binary-tree-level-order-traversal](https://leetcode.cn/problems/binary-tree-level-order-traversal/)。
