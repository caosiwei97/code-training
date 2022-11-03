const vnode = {
  tag: "DIV",
  attrs: {
    id: "app",
  },
  children: [
    {
      tag: "SPAN",
      children: [
        {
          tag: "A",
          children: [],
        },
      ],
    },
    {
      tag: "SPAN",
      children: [
        {
          tag: "A",
          children: [],
        },
        {
          tag: "A",
          children: [],
        },
      ],
    },
  ],
};

function render(vnode) {
  if (typeof vnode !== "object") {
    return document.createTextNode(vnode);
  }

  const { tag, attrs, children } = vnode;
  const el = document.createElement(tag);

  if (attrs) {
    for (const key in attrs) {
      const value = attrs[key];
      el.setAttribute(key, value);
    }
  }

  children.forEach((child) => {
    el.appendChild(render(child));
  });

  return el;
}

// 调用 render 后将元素插入 body 下面
const el = render(vnode);
console.log(el);
document.body.appendChild(el);
