## 1.TS 手写

- [实现 `Pick`](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.zh-CN.md)
- [实现 `Readonly`](https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.zh-CN.md)

## 2.树的搜索

给你一个树：

```js
const tree = [
  { name: 'A' },
  {
    name: 'B',
    children: [{ name: 'A' }, { name: 'AA', children: [{ name: 'AAA' }] }],
  },
  { name: 'C' },
]
```

假设我输入的 str 为 A, 则过滤后返回的结果为：

```js
;[{ name: 'A' }, { name: 'B', children: [{ name: 'A' }] }]
```

假设我输入的 str 为 AA,则过滤后返回的结果为：

```js
;[
  {
    name: 'B',
    children: [{ name: 'AA', children: [{ name: 'AAA' }] }],
  },
]
```

假设我输入的 str 为 B,则过滤后返回的结果为：

```js
;[
  {
    name: 'B',
    children: [{ name: 'A' }, { name: 'AA', children: [{ name: 'AAA' }] }],
  },
]
```

## 3.代码打印

- 原型考察

```js
const F = function () {}

Object.prototype.a = function () {
  console.log('a')
}

Function.prototype.b = function () {
  console.log('b')
}

const f = new F()

f.a()
f.b()

// 问：f.a()和f.b()分别打印什么
// 写出函数的原型链调用
```

- 异步考察

```js
setTimeout(function () {
  console.log('1')
}, 0)

async function async1() {
  console.log('2')
  const data = await async2()
  console.log('3')
  return data
}

async function async2() {
  return new Promise((resolve) => {
    console.log('4')
    resolve('async2的结果')
  }).then((data) => {
    console.log('5')
    return data
  })
}

async1().then((data) => {
  console.log('6')
  console.log(data)
})

new Promise(function (resolve) {
  console.log('7')
}).then(function () {
  console.log('8')
})
```

## 4.查找数据公共前缀

```
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```

## 5.leecode

- [165.比较版本号](https://leetcode.cn/problems/compare-version-numbers/)
- [70.爬楼梯](https://leetcode.cn/problems/climbing-stairs/)
