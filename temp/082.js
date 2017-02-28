/*
82. Remove Duplicates from Sorted List II
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

For example,
Given 1->2->3->3->4->4->5, return 1->2->5.
Given 1->1->1->2->3, return 2->3.
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head
  const dummy = {}
  dummy.next = head
  let par
  let cur = dummy
  let dup = false
  let prev = ~head.val
  while (head !== null) {
    if (head.val !== prev) {
      if (dup) {
        par.next = head
        cur = head
        dup = false
      } else {
        cur.next = head
        par = cur
        cur = cur.next
      }
      prev = head.val
    } else {
      dup = true
    }
    head = head.next
  }

  if (dup) par.next = null
  return dummy.next
}

module.exports = deleteDuplicates
