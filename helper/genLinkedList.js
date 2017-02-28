'use strict'
const ListNode = require('../../helper/ListNode.js')
function genLinkedList (arr) {
  const dummy = new ListNode()
  let cur = dummy
  for (let val of arr) {
    cur.next = new ListNode(val)
    cur = cur.next
  }
  return dummy.next
}
module.exports = genLinkedList
