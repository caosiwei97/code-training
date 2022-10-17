/**
 * @file 去重
 */

// 方法一：Set

Array.prototype.uniqueWithSet = function () {
  return [...new Set(this)]
}

// 方法二：filter+indexOf

Array.prototype.uniqueWithFilter = function () {
  // includes 也可
  return this.filter((item, index) => this.indexOf(item) !== index)
}
