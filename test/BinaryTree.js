'use strict'
const TreeNode = require('../TreeNode.js')

function buildFromArray (arr) {
  const len = arr.length
  if (!len) return null
  let index = 0
  const root = new TreeNode(arr[index++])
  const q = [root]
  while (q.length) {
    let node = q.shift()
    if (index >= len || arr[index] === null) {
      node.left = null
    } else {
      node.left = new TreeNode(arr[index])
      q.push(node.left)
    }
    ++index
    if (index >= len || arr[index] == null) {
      node.right = null
    } else {
      node.right = new TreeNode(arr[index])
      q.push(node.right)
    }
    ++index
  }
  return root
}

function convertToArray (root) {
  const res = []
  if (!root) return JSON.stringify(res)
  const q = [root]
  while (q.length) {
    let node = q.shift()
    if (node) {
      res.push(node.val)
      q.push(node.left)
      q.push(node.right)
    } else {
      res.push(null)
    }
  }
  for (let i = res.length - 1; i >= 0; --i) {
    if (res[i] !== null) {
      res.length = i + 1
      break
    }
  }
  return res
}

module.exports = {
  buildFromArray,
  convertToArray
}
