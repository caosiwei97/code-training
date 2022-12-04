Function.prototype._bind = function (context, args) {
  context = context || window

  const key = Symbol()

  context = Object(context)

  context[key] = this

  let that = this

  const result = function (...innerArgs) {
    if (this instanceof result) {
      this[key] = that
      return this[key](args, ...innerArgs)
    }
    return context[key](args, ...innerArgs)
  }
  if (result.prototype) {
    result.prototype = Object.create(this.prototype)
  }
  return result
}

Function.prototype.myBind = function () {
  const target = arguments[0]
  const args = Array.prototype.slice.call(arguments, 1)
  const fnToBind = this

  const bound = function () {
    const restArgs = Array.prototype.slice.call(arguments)

    return fnToBind.apply(
      this instanceof bound ? this : target,
      args.concat(restArgs),
    )
  }

  bound.prototype = Object.create(fnToBind.prototype)

  return bound
}
