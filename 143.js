/*
143. Reorder List
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  'use strict'
  if (!head) return
  let slow = head
  let fast = head
  while (fast) {
    fast = fast.next
    if (!fast) break
    fast = fast.next
    slow = slow.next
  }
  let node2 = slow.next
  slow.next = null
  node2 = reverse(node2)
  interleave(head, node2)
}

function reverse (head) {
  'use strict'
  let prev = null
  while (head) {
    const nhead = head.next
    head.next = prev
    prev = head
    head = nhead
  }
  return prev
}

function interleave (h1, h2) {
  'use strict'
  while (h2) {
    let nh1 = h1.next
    let nh2 = h2.next
    h1.next = h2
    h2.next = nh1
    h1 = nh1
    h2 = nh2
  }
  return h1
}

module.exports = reorderList
