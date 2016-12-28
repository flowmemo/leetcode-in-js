/*
83. Remove Duplicates from Sorted List
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
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
  const dummy = {}
  dummy.next = head
  let cur = dummy
  while (head !== null) {
    if (head.val != cur.val) {
      cur.next = head
      cur = cur.next
    }
    head = head.next
  }
  cur.next = null
  return dummy.next
}

module.exports = deleteDuplicates
