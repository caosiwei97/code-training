/**
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */

// 思路 “滑动窗口” 采用双指针实现
var lengthOfLongestSubstring = function (s) {
  const map = new Map()
  let max = 0
  let start = 0
  let end = 0

  while (end < s.length) {
    const cur = s[end]

    if (map.has(cur)) {
      start = Math.max(map.get(cur) + 1, start)
    }

    max = Math.max(end - start + 1, max)
    map.set(cur, end++)
  }

  return max
}
