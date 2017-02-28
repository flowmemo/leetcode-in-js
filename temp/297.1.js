/*
297. Serialize and Deserialize Binary Tree
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

For example, you may serialize the following tree

    1
   / \
  2   3
     / \
    4   5
as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const res = []
  function preorder (node) {
    if (!node) {
      res.push(null)
      return
    }
    res.push(node.val)
    preorder(node.left)
    preorder(node.right)
  }
  preorder(root)
  return res.join()
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const r = data.split(',')
  let index = 0
  function build (node) {
    if (r[index] !== '') {
      node.left = new TreeNode(+r[index++])
      build(node.left)
    } else index++
    if (r[index] !== '') {
      node.right = new TreeNode(+r[index++])
      build(node.right)
    } else index++
    return node
  }
  if (r[0] === '') return null
  let head = new TreeNode(+r[index++])
  build(head)
  return head
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

let n1 = new TreeNode(1)
let n2 = new TreeNode(2)
let n3 = new TreeNode(3)
n1.right = n2
n2.right = n3
let s = serialize(n1)
console.log(s === serialize(deserialize(s)))
console.log(deserialize(s))
