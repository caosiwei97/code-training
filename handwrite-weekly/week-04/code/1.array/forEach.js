Array.prototype._forEach = function (cb, thisArg) {
  for (let i = 0; i < this.length; i++) {
    // 判断稀疏数组
    if (this.hasOwnProperty(i)) {
      cb.call(thisArg, this[i], i, this)
    }
  }
}

const array1 = ['a', , 'b', 'c']

array1._forEach((element, i, arr) => console.log(element, i, arr))

// expected output: "a"
// expected output: "b"
// expected output: "c"
