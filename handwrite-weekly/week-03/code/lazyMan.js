// LazyMan("Hank");
// // Hi! This is Hank!

// LazyMan("Hank").sleep(10).eat("dinner");
// // Hi! This is Hank!
// // 等待10秒..
// // Wake up after 10
// // Eat dinner~

// LazyMan("Hank").eat("dinner").eat("supper");
// // Hi This is Hank!
// // Eat dinner~
// // Eat supper~

// LazyMan("Hank").sleepFirst(5).eat("supper");
// 等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
class Lazy {
  constructor(name) {
    this.tasks = [];
    this.perTasks = [];
    this.addStack(name);
    setTimeout(() => {
      // this.next();
      this.perform();
    });
  }
  // 反转任务队列，性能方面比直接 shift 要好
  perform() {
    while (this.tasks.length) {
      this.perTasks.push(this.tasks.pop());
    }
    this.next();
  }

  next() {
    // const task = this.tasks.shift();
    const task = this.perTasks.pop();
    if (task) task();
  }

  addStack(name) {
    const task = () => {
      console.log(`Hi! This is ${name}!`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }

  eat(food) {
    const task = () => {
      console.log(`Eat ${food}~`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }

  sleep(second) {
    this.sleepWrap(second);
    return this;
  }

  sleepFirst(second) {
    this.sleepWrap(second, true);
    return this;
  }

  sleepWrap(second, isFirst) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${second}`);
        this.next();
      }, second * 1000);
    };

    if (isFirst) {
      this.tasks.unshift(isFirst);
    } else {
      this.tasks.push(task);
    }
  }
}

function LazyMan(name) {
  let lazyMan = new Lazy(name);
  return lazyMan;
}

LazyMan("Hank");
// Hi! This is Hank!

LazyMan("Hank").sleep(10).eat("dinner");
// Hi! This is Hank!
// 等待10秒..
// Wake up after 10
// Eat dinner~

LazyMan("Hank").eat("dinner").eat("supper");
// Hi This is Hank!
// Eat dinner~
// Eat supper~

LazyMan("Hank").sleepFirst(5).eat("supper");
