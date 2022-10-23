class EventEmitter {
  constructor() {
    this.events = {}
  }
  // 监听事件
  on(type, cb) {
    if (!this.events[type]) {
      this.events[type] = [cb]
    } else {
      this.events.push(cb)
    }
  }
  // 移除事件监听
  off(type, cb) {
    if (!this.events[type]) return
    if (cb) {
      this.events[type] = this.events[type].filter((item) => item !== cb)
    } else {
      delete this.events[type]
    }
  }

  // 触发事件监听
  emit(type, ...args) {
    if (!this.events[type]) return
    this.events[type].forEach((cb) => {
      if (cb) {
        cb.apply(this, args)
        cb.isOnce && this.off(type, cb)
      }
    })
  }

  // 只监听一次
  once(type, cb) {
    // 方法一：此方法缺点：无法提前 off
    // function fn(...args) {
    //   cb(...args)
    //   this.off(type, fn)
    // }
    // this.on(type, fn)

    // 方法二：增加一个属性，在 emit 的时候去判断
    this.on(type, cb)
    cb.isOnce = true
  }
}

const bus = new EventEmitter()

// 订阅事件
bus.on('A', (name, age) => {
  console.info('我是订阅事件A:', name, age)
})
bus.once('B', (name, age) => {
  console.info('我是订阅事件B:', name, age)
})
bus.on('C', (name) => {
  console.info('我是订阅事件C:', name)
})

bus.emit('A', 'dog', 18)
bus.off('A')
bus.emit('A', 'dog', 18)

bus.emit('B', 'dog', 18)
bus.emit('B', 'dog', 18)

bus.emit('C', 'dog')
