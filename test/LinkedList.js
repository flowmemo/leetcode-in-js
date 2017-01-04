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
  while (root) {
    res.push(root.val)
    root = root.next
  }
  return res
}

module.exports = {
  buildFromArray,
  convertToArray
}
