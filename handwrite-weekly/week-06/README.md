## 1.代码顺序

```js
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

async1()

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
  console.log('promise2')
}).then(function () {
  console.log('promise3')
})

console.log('script end')
```

答案如下：

```
'script start'
'async1 start'
'async2'
'promise1'
'promise2'
'script end'
'async1 end'
'promise3'
'setTimeout'
```

## 2.实现下面 `run` 和 `ajax` 两个函数

> 考察点：async/await 原理；简易 `co` 模块实现；ajax

```js
/**
 * Ajax简易封装GET请求
 * @param {string} url 请求地址
 * @return {promise} 返回 promise
 */
function ajax(url) {}
```

自己创建 a,b,c 三份 json 数据：

// a.json

```json
{ "id": 1, "name": "laowang" }
```

// b.json

```json
{ "id": 1, "name": "zhangsan" }
```

// c.json

```json
{ "id": 1, "name": "laowang" }
```

```js
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

function run(gen) {}

run(getData)
```

[答案](./code/2.generator/main.js)

## 3.请实现下面的逻辑

```js
if (a == 1 && a == 2 && a == 3) {
  console.log('我真帅')
}
```

[答案](./code/3.increase_a/index.js)

## 4.限制请求并发数

> 场景：大文件上传中的分片请求优化

假如一个页面有将近 100 个请求，如何在前端控制并发请求的个数，比如同一时刻只发送 3 个 ？

```js
const pics = [
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];

// 模拟异步请求
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      console.log("一张图片加载完成");
      resolve(img);
    };
    img.onerror = function() {
    	reject(new Error('Could not load image at' + url));
    };
    img.src = url;
  });

// code here
function limitLoad(urls, handle, limit) {}

limitLoad(urls, loadImg, 3)
  .then(res => {
    console.log("图片全部加载完毕");
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });
```

[答案](./code/4.limitLoad/index.js)

## 5.算法(easy)

### 5.1 两数之和

- [传送门](https://leetcode.cn/problems/two-sum/)
- [答案](./code/5.algorithm/twosum.js)

### 5.2 有效的括号

- [传送门](https://leetcode.cn/problems/valid-parentheses/)
- [答案](./code/5.algorithm/isValid.js)
