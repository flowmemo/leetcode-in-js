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
  this.stk = []
  this.node = root
}

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function () {
  'use strict'
  return Boolean(this.node || this.stk.length)
}

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function () {
  'use strict'
  let node = this.node
  let stk = this.stk
  while (node || stk.length) {
    if (node) {
      stk.push(node)
      node = node.left
    } else {
      node = stk.pop()
      let r = node.val
      this.node = node.right
      return r
    }
  }
}

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
module.exports = BSTIterator
