/*
173. Binary Search Tree Iterator
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.
*/

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
  this.val = undefined
  this.g = gen(root)
  this.val = this.g.next().value
}

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function () {
  'use strict'
  return this.val !== undefined
}

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function () {
  'use strict'
  let r = this.val
  this.val = this.g.next().value
  return r
}

function * gen (root) {
  'use strict'
  if (!root) return
  if (root.left) yield * gen(root.left)
  yield root.val
  if (root.right) yield * gen(root.right)
}
/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

module.exports = BSTIterator
