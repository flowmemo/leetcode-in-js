'use strict'
const ListNode = require('../ListNode.js')

function buildFromArray (arr) {
  const dummy = new ListNode()
  let cur = dummy
  for (let val of arr) {
    cur.next = new ListNode(val)
    cur = cur.next
  }
  return dummy.next
}

function convertToArray (root) {
  const res = []
  const visited = new Set()
  while (root) {
    if (visited.has(root)) throw new Error('cycled linked list!')
    visited.add(root)
    res.push(root.val)
    root = root.next
  }
  return res
}

function concatList (root1, root2) {
  if (!root1) return root2
  const head = root1
  let node = root1
  while (node.next) node = node.next
  node.next = root2
  return head
}

module.exports = {
  buildFromArray,
  convertToArray,
  concatList
}
