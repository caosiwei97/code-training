Array.prototype._map = function (cb, thisArg) {
  let ret = []

  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      ret.push(cb.call(thisArg, this[i], i, this))
    }
  }

  return ret
}

const array1 = [1, , 4, 9, 16]
const map1 = array1._map((x) => x * 2)

console.log(map1)
// expected output: Array [2, 8, 18, 32]
