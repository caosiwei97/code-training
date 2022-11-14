Array.prototype._filter = function (cb, thisArg) {
  let ret = []

  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      const value = cb.call(thisArg, this[i], i, this)

      value && ret.push(this[i])
    }
  }

  return ret
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const result = words._filter((word) => word.length > 6)

console.log(result)
// expected output: Array ["exuberant", "destruction", "present"]
