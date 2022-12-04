Function.prototype._apply = function (context, args) {
  if (
    !Array.isArray(args) &&
    !('length' in args && typeof args.length === 'number')
  ) {
    throw new Error('error')
  }
  context = context || window || globalThis
  context = Object(context)

  const s_key = Symbol()

  context[s_key] = this
  const res = context[s_key](...args)

  delete context[s_key]

  return res
}
