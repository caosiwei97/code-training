const pics = [
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png',
]

// 模拟异步请求
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.onload = function () {
      console.log('一张图片加载完成')
      resolve(img)
    }

    img.onerror = function () {
      reject(new Error('Could not load image at' + url))
    }

    img.src = url
  })
}

// code here
async function limitLoad(urls, handleFn, limit = 3) {
  const allTask = [] // 存储所有的异步任务
  const executingTask = [] // 存储正在执行的异步任务

  for (const url of urls) {
    // 调用handleFn函数创建异步任务
    const p = Promise.resolve().then(() => handleFn(url))
    allTask.push(p) // 保存新的异步任务

    // 当limit值小于或等于总任务个数时，进行并发控制
    if (limit <= urls.length) {
      // 当任务完成后，从正在执行的任务数组中移除已完成的任务
      const e = p.then(() => executingTask.splice(executingTask.indexOf(e), 1))
      executingTask.push(e) // 保存正在执行的异步任务

      if (executingTask.length >= limit) {
        await Promise.race(executingTask) // 等待较快的任务执行完成
      }
    }
  }
  return Promise.all(allTask)
}

limitLoad(pics, loadImg)
  .then((res) => {
    console.log(res)
    console.log('图片加载完成')
  })
  .catch((e) => {
    console.log(e)
  })
