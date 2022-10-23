function parseQueryParams(url) {
  const obj = url
    .split('?')[1]
    .split('&')
    .reduce((target, cur) => {
      const [key, value] = cur.split('=')
      target[key] = value
      return target
    }, {})
  return obj
}

console.log(parseQueryParams('http://www.baidu.com?q=foo&bar=baz')) // { q: 'foo', bar: 'baz' }
