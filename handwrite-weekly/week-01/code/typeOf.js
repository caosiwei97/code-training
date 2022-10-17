/**
 * @file typeOf 函数实现
 */

function typeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

typeOf([]) // 'array'
typeOf({}) // 'object'
typeOf(new Date()) // 'date'
