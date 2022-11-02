## 1.数组方法实现大礼包

- 实现 forEach

```js
const array1 = ['a', 'b', 'c']

array1.forEach((element) => console.log(element))

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

- 实现 map

```js
// pass a function to map
const map1 = array1.map((x) => x * 2)

console.log(map1)
// expected output: Array [2, 8, 18, 32]
```

- 实现 filter

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const result = words.filter((word) => word.length > 6)

console.log(result)
// expected output: Array ["exuberant", "destruction", "present"]
```

- 实现 some

```js
const array = [1, 2, 3, 4, 5]

// checks whether an element is even
const even = (element) => element % 2 === 0

console.log(array.some(even))
// expected output: true
```

- 实现 reduce

```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10

```

## 2.实现 compose

实现 compose 函数, 类似于 koa 的中间件洋葱模型。

```js
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
function compose(middlewares) {}
```

## 3.数组转树

有以下扁平结构的数组，请转为树结构。比如：

```js
const arr = [
  {
    id: 2,
    name: '部门B',
    parentId: 0,
  },
  {
    id: 3,
    name: '部门C',
    parentId: 1,
  },
  {
    id: 1,
    name: '部门A',
    parentId: 2,
  },
  {
    id: 4,
    name: '部门D',
    parentId: 1,
  },
  {
    id: 5,
    name: '部门E',
    parentId: 2,
  },
  {
    id: 6,
    name: '部门F',
    parentId: 3,
  },
  {
    id: 7,
    name: '部门G',
    parentId: 2,
  },
  {
    id: 8,
    name: '部门H',
    parentId: 4,
  },
]
```

转为树后：

```js
const arr = [
  {
    id: 2,
    name: '部门B',
    parentId: 0,
    children: [
      {
        id: 1,
        name: '部门A',
        parentId: 2,
        children: [
          {
            id: 3,
            name: '部门C',
            parentId: 1,
            children: [
              {
                id: 6,
                name: '部门F',
                parentId: 3,
              },
            ],
          },

          {
            id: 4,
            name: '部门D',
            parentId: 1,
            children: [
              {
                id: 8,
                name: '部门H',
                parentId: 4,
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: '部门E',
        parentId: 2,
      },
      {
        id: 7,
        name: '部门G',
        parentId: 2,
      },
    ],
  },
]
```

## 4.场景：前端的权限系统怎么实现？

假如某个系统有超级管理员，平台管理员、运营管理、会员、游客等角色，不同的角色进入系统后可以操作的页面不同，包括：

- 操作按钮
- 路由页面
- 页面内容不同

请问该如何设计？

## 5.算法：无重复字符的最大子串

[leecode 传送门](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)
