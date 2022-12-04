## 1.改变 this 指向

请实现 call、apply、bind。

- call

```js
function Product(name, price) {
  this.name = name
  this.price = price
}

function Food(name, price) {
  Product._call(this, name, price)
  this.category = 'food'
}

console.log(new Food('cheese', 5).name)
// expected output: "cheese"
```

[答案](./code/call.js)

- apply

```js
const numbers = [5, 6, 2, 3, 7]

const max = Math.max.apply(null, numbers)

console.log(max)
// expected output: 7

const min = Math.min.apply(null, numbers)

console.log(min)
// expected output: 2
```

[答案](./code/apply.js)

- bind

```js
const module = {
  x: 42,
  getX: function () {
    return this.x
  },
}

const unboundGetX = module.getX
console.log(unboundGetX()) // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module)
console.log(boundGetX())
// expected output: 42
```

[答案](./code/bind.js)

## 2.实现函数式编程中的柯里化

```js
function curry() {}

function multiFn(a, b, c) {
  return a * b * c
}

var multi = curry(multiFn)

multi(2)(3)(4)
multi(2, 3, 4)
multi(2)(3, 4)
multi(2, 3)(4)

// expected output: 24
```

[答案](./code/curry.js)

## 3.正则大礼包

- 实现千位分隔符

```js
// 保留三位小数
parseToMoney(1234.56) // return '1,234.56'
parseToMoney(123456789) // return '123,456,789'
parseToMoney(1087654.321) // return '1,087,654.321'
```

[答案](./code/reg/parseToMoney.js)

- 判断电话号码 (11 位的手机号)

```js
function isPhone(tel) {}
```

[答案](./code/reg/isPhone.js)

- 判断邮箱

```js
function isEmail(email) {}
```

[答案](./code/reg/isEmal.js)

- 判断身份证

```js
function isCardNo(num) {}
```

[答案](./code/reg/isCardNo.js)

## 4.渲染十万条数据，有什么解决方案 ？

后续专题分享。

## 5.反转链表

[传送门](https://leetcode.cn/problems/reverse-linked-list/)
[答案](./code/reverseList.js)
