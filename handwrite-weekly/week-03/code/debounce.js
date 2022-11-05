/**
 * @params fun 目标函数
 * @params wait 等待的时间
 * @params immediate 是否立即执行
 */
function debounce(fun, wait, immediate = false) {
  let timer = null,
    isFirst = false;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (immediate && !isFirst) {
      fun.apply(this, args);
      isFirst = true;
    }
    timer = setTimeout(() => {
      fun.apply(this, args);
      clearTimeout(timer);
      timer = null;
      isFirst = false;
    }, wait);
  };
}

// 防止 debounce 的 延迟时间较长，从而出现假死状态
function debouncePlus(fn, delay) {
  let last = 0,
    timer = null;
  return function (...args) {
    let now = +new Date();
    if (now - last < delay) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(this, args);
      }, delay);
    } else {
      last = now;
      fn.apply(this, args);
    }
  };
}
