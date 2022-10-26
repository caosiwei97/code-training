/**
 * @file typeOf 函数实现
 */

function typeOf(obj) {
  const result = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  const map = {
    'number': true,
    'string': true,
    'boolean': true,
    'undefined': true,
    'symbol': true,
    'bigint': true,
    'function': true,
  }

  return map[result] ? result : 'object'
}

typeOf([]); // 'object'
typeOf({}); // 'object'
typeOf(new Date()); // 'object'
typeOf(Symbol(1)) // 'symbol'
typeOf(() => {}); // 'function'
