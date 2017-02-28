/*
220. Contains Duplicate III
Given an array of integers, find out whether there are two distinct indices i and j in the array such that the difference between nums[i] and nums[j] is at most t and the difference between i and j is at most k.

Subscribe to see which companies asked this question
*/

class TreeNode {
  constructor (val, index = -1, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
    this.index = index
  }
}

class BST {
  add (val, index) {
    // return difference with nearest element
    let mdiff = Infinity
    let node = this.top

    if (!node) {
      this.top = new TreeNode(val, index)
      return mdiff
    }

    while (1) {
      if (Math.abs(val - node.val) < mdiff) mdiff = Math.abs(val - node.val)
      if (val === node.val) {
        // update index
        node.index = index
        return 0
      }
      if (val < node.val) {
        if (node.left) {
          node = node.left
        } else {
          node.left = new TreeNode(val, index)
          return mdiff
        }
      } else {
        if (node.right) {
          node = node.right
        } else {
          node.right = new TreeNode(val, index)
          return mdiff
        }
      }
    }
  }

  deleteMax (node, par, direct) {
    while (node.right) {
      par = node
      node = node.right
      direct = 'right'
    }
    par.right = node.left
    return par.right
  }

  deleteMin (node, par, direct) {
    while (node.left) {
      par = node
      node = node.left
      direct = 'left'
    }
    par[direct] = node.right
    return node
  }

  delete (val, index) {
    let node = this.top
    if (!node) return null
    let par = this
    let direct = 'top'
    while (1) {
      if (val === node.val && index === node.index) {
        if (!node.left) {
          par[direct] = node.right
          return
        } else if (!node.right) {
          par[direct] = node.left
          return
        }
        let replaceNode = this.deleteMin(node.right, node, 'right')
        ;[node.val, node.index] = [replaceNode.val, replaceNode.index]
        return par[direct]
      } else if (val < node.val) {
        par = node
        direct = 'left'
        node = node.left
      } else {
        par = node
        direct = 'right'
        node = node.right
      }
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const len = nums.length
  if (len <= 1 || k === 0) return false
  const bst = new BST()
  for (let i = 0; i <= k && i < len; i++) {
    let diff = bst.add(nums[i], i)
    if (diff <= t) return true
  }

  for (let i = k + 1; i < len; i++) {
    bst.delete(nums[i - k - 1], i - k - 1)
    let diff = bst.add(nums[i], i)
    if (diff <= t) return true
  }

  return false
}

let tc = [
  [
    [1, 4, 9, 5], 2, 2
  ],
  [
    [1, 3, 5], 2, 1
  ],
  [
    [1, 2], 0, 1
  ],
  [
    [4, 2], 2, 1
  ],
  [
    [1, 0, 1, 1], 1, 0
  ],
  [
    [0, 10, 22, 15, 0, 5, 22, 12, 1, 5], 3, 3
  ]
]
let ans = [
  true, false, false, false, true, false
]
for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = containsNearbyAlmostDuplicate(...tc[i])
  console.log(a === r)
}
