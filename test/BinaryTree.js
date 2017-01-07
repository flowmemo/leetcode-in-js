const TreeNode = require('../TreeNode.js')

function genNode (val) {
  if (val === null || val === undefined) return null
  return new TreeNode(val)
}

function serialize (root) {
  const res = convertToArray(root)
  return JSON.stringify(res)
}

function deserialize (data) {
  const arr = JSON.parse(data)
  return buildFromArray(arr)
}

function buildFromArray (arr) {
  const len = arr.length
  if (!len) return null
  let index = 0
  const root = genNode(arr[index++])
  let curLevel = [root]
  let nextLevel = []
  while (index < len) {
    for (let node of curLevel) {
      if (node) {
        node.left = genNode(arr[index++])
        node.right = genNode(arr[index++])
        nextLevel.push(node.left)
        nextLevel.push(node.right)
      }
    }
    curLevel = nextLevel
    nextLevel = []
  }
  return root
}

function convertToArray (root) {
  const res = []
  let curLevel = [root]
  let nextLevel = []
  let hasNonNullNode = true
  while (hasNonNullNode) {
    hasNonNullNode = false
    for (let node of curLevel) {
      if (node) {
        res.push(node.val)
        if (node.left || node.right) hasNonNullNode = true
        nextLevel.push(node.left)
        nextLevel.push(node.right)
      } else res.push(null)
    }
    curLevel = nextLevel
    nextLevel = []
  }
  return res
}

module.exports = {
  buildFromArray,
  convertToArray
}
