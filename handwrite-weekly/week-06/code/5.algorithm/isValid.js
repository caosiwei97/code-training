const isValid = function (s) {
  // 1.奇数位数直接返回
  if (s.length % 2 !== 0) {
    return false
  }

  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  const stack = []
  let i = 0

  while (i < s.length) {
    const cur = s.chartAt(i)
    // 栈顶元素与当前元素匹配
    const topStack = stack[stack.length - 1]

    if (topStack === map[cur]) {
      // 出栈
      stack.pop()
    } else {
      // 入栈
      stack.push(cur)
    }

    i++
  }

  // 栈不为空说明不匹配
  return !!stack.length
}
