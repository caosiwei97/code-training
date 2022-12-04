Function.prototype._call = function (context, ...args) {
  context = context || window || globalThis
  context = Object(context)

  const s_key = Symbol()

  context[s_key] = this

  const res = context[s_key](...args)

  delete context[s_key]

  return res
}
