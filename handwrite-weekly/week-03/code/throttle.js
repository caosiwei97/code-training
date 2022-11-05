/**
 * @params fun 目标函数
 * @params delay 间隔的时间
 */
function throttle(fun, delay) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fun.apply(this, args);
        clearTimeout(timer);
        timer = null;
      }, delay);
    }
  };
}

function throttle2(fun, delay) {
  let prev = Date.now();
  return function (...args) {
    let now = Date.now();
    if (now - prev >= delay) {
      fun.apply(this, args);
      prev = now;
    }
  };
}
