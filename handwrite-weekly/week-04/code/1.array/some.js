Array.prototype._some = function (cb, thisArg) {
  let ret = []

  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      const value = cb.call(thisArg, this[i], i, this)

      if (value) {
        return true
      }
    }
  }

  return ret
}

const array = [1, 2, 3, 4, 5]

// checks whether an element is even
const even = (element) => element % 2 === 0

console.log(array._some(even))
// expected output: true
