Array.prototype._reduce = function (cb, initialValue) {
  if (this == null) {
    throw new TypeError('this is null or not defined')
  }

  if (typeof cb !== 'function') {
    throw new TypeError(cb + ' is not a function')
  }

  let acc

  if (arguments.length > 1) {
    acc = initialValue
  } else {
    // 找到第一个不是 empty 的初始值
    for (let i = 0; i < this.length; i++) {
      if (!this.hasOwnProperty(i)) {
        acc = this[i + 1]
        break
      }
    }
  }

  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) {
      continue
    }

    acc = cb(acc, this[i], i, this)
  }

  return acc
}

const array1 = [, , , 1, 2, 3, 4]

// 0 + 1 + 2 + 3 + 4
const initialValue = 0
const sumWithInitial = array1._reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue,
)

console.log(sumWithInitial)
// expected output: 10
