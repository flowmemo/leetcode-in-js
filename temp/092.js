/*
92. Reverse Linked List II
Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  const dummy = {}
  dummy.next = head
  par = dummy
  for (let i = 1; i < m; ++i) par = par.next
  let k = n - m

  let cur = par.next
  head = cur.next
  const ntail = cur
  while (k-- > 0) {
    let nhead = head.next
    head.next = cur
    cur = head
    head = nhead
  }
  par.next = cur
  ntail.next = head
  return dummy.next
}

module.exports = reverseBetween
