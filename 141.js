/*
141. Linked List Cycle
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head
  let fast = head
  while (slow && fast) {
    slow = slow.next
    fast = fast.next
    if (!fast) return false
    fast = fast.next
    if (slow === fast) return true
  }
  return false
}

module.exports = hasCycle
