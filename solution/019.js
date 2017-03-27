/*
19. Remove Nth Node From End of List
Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/** one-pass.
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  'use strict'
  const dummy = {}
  dummy.next = head
  let cur = head
  let pre = dummy
  for (let i = 0; i < n; ++i) cur = cur.next
  while (cur != null) {
    cur = cur.next
    pre = pre.next
  }
  pre.next = pre.next.next
  return dummy.next
}

module.exports = removeNthFromEnd
