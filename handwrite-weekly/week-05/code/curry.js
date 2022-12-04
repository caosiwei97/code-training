function curry(fn) {
  const curried = function (...args) {
    if (args.length === fn.length) return fn(...args)
    return (...rest) => curried(...args, ...rest)
  }

  return curried
}
