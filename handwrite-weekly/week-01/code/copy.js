/**
 * @file 深浅拷贝
 */

const isObject = (target) =>
  (typeof target === 'object' || typeof target === 'function') &&
  target !== null

// 深拷贝
function deepClone(target, set = new WeakSet()) {
  if (set.has(target) || !isObject(target)) {
    return target
  }

  let constructor = target.constructor
  // 检测当前对象target是否与正则、日期格式对象匹配
  if (/^(RegExp|Date)$/i.test(constructor.name)) {
    // 创建一个新的特殊对象(正则类/日期类)的实例
    return new constructor(target)
  }

  set.add(target, true) // 为循环引用的对象做标记
  const cloneTarget = Array.isArray(target) ? [] : {}

  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = deepClone(target[prop], set)
    }
  }

  return cloneTarget
}

// 浅拷贝
function shallowCopy(target) {
  // return Object.assign({}, target)
  // return {...target}
  // return target.slice()
  const ret = Array.isArray(target) ? [] : {}

  for (const key in target) {
    if (Object.hasOwnProperty.call(target, key)) {
      ret[key] = target[key]
    }
  }

  return ret
}
