/*
315. Count of Smaller Numbers After Self
Difficulty: Hard
You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

Example:

Given nums = [5, 2, 6, 1]

To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
Return the array [2, 1, 1, 0].
*/

// https://discuss.leetcode.com/post/33090
// BST solution

class TreeNode {
  constructor (val, count = 1, lcount = 0) {
    this.val = val
    this.count = count
    this.lcount = lcount // count of left subnode
    this.left = this.right = null
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  'use strict'
  const len = nums.length
  if (len <= 1) return nums.fill(0)
  const res = [0]
  const root = new TreeNode(nums[len - 1])
  let node = root
  let smaller = 0
  let cur
  for (let i = len - 2; i >= 0; i--) {
    node = root
    smaller = 0
    cur = nums[i]
    while (true) {
      if (cur === node.val) {
        node.count++
        smaller += node.lcount
        break
      } else if (cur < node.val) {
        node.lcount++
        if (node.left) {
          node = node.left
        } else {
          node.left = new TreeNode(cur, 1, 0)
          break
        }
      } else if (cur > node.val) {
        smaller += node.lcount + node.count
        if (node.right) {
          node = node.right
        } else {
          node.right = new TreeNode(cur, 1, 0)
          break
        }
      }
    }
    res.unshift(smaller)
  }
  return res
}

let tc = [
  [2, 1],
  [1, 2],
  [5, 2, 6, 1],
  [18, 17, 13, 19, 15, 11, 20],
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [1],
  [1, 2, 2, 1],
  [1, 2, 3, 4, 2, 1],
  [27, 90, 23, 66, 5, 38, 7, 35, 23, 52, 22],
  [3, 0, 2, 1],
  [4, 2, 3, 1],
  [26, 78, 27, 100, 33, 67, 90, 23, 66, 5, 38, 7, 35, 23, 52, 22, 83, 51, 98, 69, 81, 32, 78, 28, 94, 13, 2, 97, 3, 76, 99, 51, 9, 21, 84, 66, 65, 36, 100, 41],
  [100, 33, 67, 90, 23, 66, 5, 38, 7, 35, 23, 52, 22, 83, 51, 98, 69, 81, 32, 78, 28, 94, 13, 2, 97, 3, 76, 99, 51, 9, 21, 84, 66, 65, 36, 100, 41]
]
let ans = [
  [1, 0],
  [0, 0],
  [2, 1, 1, 0],
  [4, 3, 1, 2, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [4, 3, 2, 1, 0],
  [0],
  [0, 1, 1, 0],
  [0, 1, 2, 2, 1, 0],
  [5, 9, 3, 7, 0, 4, 0, 2, 1, 1, 0],
  [3, 0, 1, 0],
  [3, 1, 1, 0],
  [10, 27, 10, 35, 12, 22, 28, 8, 19, 2, 12, 2, 9, 6, 12, 5, 17, 9, 19, 12, 14, 6, 12, 5, 12, 3, 0, 10, 0, 7, 8, 4, 0, 0, 4, 3, 2, 0, 1, 0],
  [35, 12, 22, 28, 8, 19, 2, 12, 2, 9, 6, 12, 5, 17, 9, 19, 12, 14, 6, 12, 5, 12, 3, 0, 10, 0, 7, 8, 4, 0, 0, 4, 3, 2, 0, 1, 0]
]

for (let i = 0; i < ans.length; i++) {
  let a = ans[i]
  let r = countSmaller(tc[i])
  console.log(a.join() === r.join())
}
