## 1.发布订阅

实现一个 `EventEmitter`类，要求：

```javascript
class EventEmitter {
  constructor() {}

  // 监听事件
  on() {}
  // 移除事件监听
  off() {}

  // 触发事件监听
  emit() {}

  // 只监听一次
  once() {}
}
```

## 2.解析 query 参数

```javascript
function parseQueryParams(url) {}

parseQueryParams('http://www.baidu.com?q=foo&bar=baz') // { q: 'foo', bar: 'baz' }
```

## 3.图片懒加载

- 实现一个 lazyLoad 函数
- 监听 scroll 事件，触发 lazyLoad
- 当图片全部加载完毕后，销毁 scroll 事件
- dom 结构如下：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>lazy load</title>
    <style>
      .img {
        width: 220px;
        height: 220px;
        background-color: #ccc;
        margin-bottom: 40px;
        margin-left: 50px;
      }

      .pic {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <!--将真实的src先放在data-src中-->
      <div class="img">
        <img
          class="pic"
          alt="加载中..."
          data-src="https://img10.360buyimg.com/n7/jfs/t1/183679/11/2189/143829/6091f5d8E933e7ad1/e3e2001666f2ce7b.jpg"
        />
      </div>
      <div class="img">
        <img
          class="pic"
          alt="加载中..."
          data-src="https://img12.360buyimg.com/n7/jfs/t1/192682/11/617/163213/608b887aEddbbbee3/9570466a90d02f79.jpg"
        />
      </div>
      <div class="img">
        <img
          class="pic"
          alt="加载中..."
          data-src="https://img14.360buyimg.com/n7/jfs/t1/156161/35/18802/268242/60641d96Eca3dee7f/4a32070a19deb4f5.jpg"
        />
      </div>
      <div class="img">
        <img
          class="pic"
          alt="加载中..."
          data-src="https://img10.360buyimg.com/n7/jfs/t1/130179/12/9273/167054/5f5468edE9d4ecd9c/39f7520d9f76b695.jpg"
        />
      </div>
      <div class="img">
        <img
          class="pic"
          alt="加载中..."
          data-src="https://img14.360buyimg.com/n7/jfs/t1/100888/13/13132/105320/5e5533c6Ea8daa487/f95d7ba4da5581c5.jpg"
        />
      </div>
      <div class="img">
        <img
          class="pic"
          alt="加载中..."
          data-src="https://img10.360buyimg.com/n7/jfs/t1/173986/31/8862/291849/6098d6d0E26c55012/c2144f6e074556d2.jpg"
        />
      </div>
      <div class="img">
        <img
          class="pic"
          alt="加载中..."
          data-src="https://img10.360buyimg.com/n7/jfs/t1/110754/4/12605/101916/5ee43244E6fbf9433/c42fb5e3f9558a59.jpg"
        />
      </div>
      <div class="img">
        <img
          class="pic"
          alt="加载中..."
          data-src="https://img10.360buyimg.com/n7/jfs/t1/148370/31/1084/45848/5eedc2eeEfdc2cd46/f3c3a6f0bd7998be.jpg"
        />
      </div>
      <div class="img">
        <img
          class="pic"
          alt="加载中..."
          data-src="https://img10.360buyimg.com/n7/jfs/t1/165930/8/7273/171076/602fd5dfE65a52775/ee27074b7037c020.jpg"
        />
      </div>
      <div class="img">
        <img
          class="pic"
          alt="加载中..."
          data-src="https://img13.360buyimg.com/n7/jfs/t1/190093/28/117/193777/60867822Ea949fbec/6fe51b122d0fdc5a.jpg"
        />
      </div>
      <div class="img">
        <img
          class="pic"
          alt="加载中..."
          data-src="https://img14.360buyimg.com/n7/jfs/t1/119501/15/6768/115886/5eca6c36Eb3541dc9/2f4534173878a23c.jpg"
        />
      </div>
    </div>
  </body>
</html>
```

## 4.Promise 大礼包

- Promise.all

```javascript
const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
})

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values)
})
// expected output: Array [3, 42, "foo"]
```

- Promise.allSettled

```javascript
const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'),
)
const promises = [promise1, promise2]

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
)

// expected output:
// "fulfilled"
// "rejected"
```

- Promise.any

```javascript
const pErr = new Promise((resolve, reject) => {
  reject('总是失败')
})

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, '最终完成')
})

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, '很快完成')
})

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value)
  // pFast fulfils first
})
// 期望输出："很快完成"
```

- Promise.race

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one')
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two')
})

Promise.race([promise1, promise2]).then((value) => {
  console.log(value)
  // Both resolve, but promise2 is faster
})
// expected output: "two"
```

## 5.叠词的数量

- 输出叠词的数量
- 输出去重叠词的数量
- 用正则实现（可选）

```javascript
function getRepititions(str) {}

getRepititions('abcdaaabbccccdddefgaaa') // 4
```
