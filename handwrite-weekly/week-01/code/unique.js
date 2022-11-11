/**
 * @file 去重
 */

// 方法一：Set

Array.prototype.uniqueWithSet = function () {
  return [...new Set(this)]
}

// 方法二：filter+lastIndexOf

Array.prototype.uniqueWithFilter = function () {
  return this.filter((item, index) => this.lastIndexOf(item) === index)
}
