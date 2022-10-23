function checkRepitition(item) {
  const flag = item[0] === item[1] || item[1] === item[2]
  return flag && new Set(item).size !== 1
}

// ABB
function getRepititions1(str) {
  const temp = []
  let index = 0
  while (index < str.length - 2) {
    temp.push(str.slice(index, index + 3))
    index++
  }

  const result = temp.filter((item) => checkRepitition(item))

  return result
}

function getRepititions2(str) {
  if (!str) return 0
  let num = 0,
    set = new Set(),
    start = 0,
    end = 0
  while (end < str.length) {
    str[end] === str[start] ? set.add(str[end]) : (start = end)
    end++
    if (start + 1 == end && str[end] !== str[start]) {
      num = Math.max(set.size, num)
      set.clear()
    }
  }
  return num
}

function getRepititions3(str) {
  return [...new Set(str.match(/(.)\1+/g))].length
}

console.log(getRepititions1('abcdaaabbccccdddefgaaa'))
console.log(getRepititions2('abcdaaabbccccdddefgaaa'))
console.log(getRepititions3('abcdaaabbccccdddefgaaa'))
