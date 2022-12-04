function reverseList1(head) {
  if (head === null || head.next === null) return head
  // 递归
  const p = reverseList(head.next)
  // 两个节点之间反转
  head.next.next = head
  head.next = null

  return p
}

function reverseList2(head) {
  let pre = null
  let cur = head

  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre
}
