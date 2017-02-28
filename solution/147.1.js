/*
147. Insertion Sort List
Sort a linked list using insertion sort.
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
var insertionSortList = function (head) {
  'use strict'
  let dummy = {next: null}
  while (head) {
    let nhead = head.next
    let prev = dummy
    let cur = dummy.next
    while (cur && cur.val < head.val) {
      prev = cur
      cur = cur.next
    }
    prev.next = head
    head.next = cur
    head = nhead
  }
  return dummy.next
}

module.exports = insertionSortList
