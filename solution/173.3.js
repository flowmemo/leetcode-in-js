/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function (root) {
  'use strict'
  this.cur = root
  this.stk = []
}

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function () {
  'use strict'
  return Boolean(this.cur || this.stk.length)
}

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function () {
  'use strict'
  while (this.cur) {
    this.stk.push(this.cur)
    this.cur = this.cur.left
  }

  this.cur = this.stk.pop()
  const r = this.cur.val
  this.cur = this.cur.right
  return r
}

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

module.exports = BSTIterator
