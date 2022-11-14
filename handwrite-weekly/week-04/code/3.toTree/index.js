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

function arrayToTree(arr, rootId = 0) {
  // 边界判断省略...
  let map = {}
  let ret = []

  arr.forEach((item) => {
    const { id, parentId } = item
    // 每次迭代判断一下 id 是否已经存在（一般存的是前面遍历过元素的 parentId，只有 chilren 属性）
    map[id] = map[id] ? { ...item, ...map[id] } : item
    // 记录当前遍历的节点
    const treeNode = map[id]

    if (rootId === parentId) {
      // 根节点
      ret.push(treeNode)
    } else {
      // 找到当前元素的父节点，没有先给个空对象
      map[parentId] = map[parentId] || {}
      // 将自己放入父节点 chilren 属性中
      const parent = map[parentId]
      ;(parent.chilren || (parent.chilren = [])).push(treeNode)
    }
  })

  return ret
}

console.log(arrayToTree(arr))
