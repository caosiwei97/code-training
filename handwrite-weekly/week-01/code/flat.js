/**
 * @file 数组扁平化
 */

// 方法一：while

function flattenWithWhile(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr)
  }

  return arr
}

// 方法二：for + concat + 递归

function flattenWithConcat(arr) {
  let result = []

  for (var i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }

  return result
}

// 拓展：加深度
