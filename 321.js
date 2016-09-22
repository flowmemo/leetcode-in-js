/*
321. Create Maximum Number
Given two arrays of length m and n with digits 0-9 representing two numbers. Create the maximum number of length k <= m + n from digits of the two. The relative order of the digits from the same array must be preserved. Return an array of the k digits. You should try to optimize your time and space complexity.

Example 1:
nums1 = [3, 4, 6, 5]
nums2 = [9, 1, 2, 5, 8, 3]
k = 5
return [9, 8, 6, 5, 3]

Example 2:
nums1 = [6, 7]
nums2 = [6, 0, 4]
k = 5
return [6, 7, 6, 0, 4]

Example 3:
nums1 = [3, 9]
nums2 = [8, 9]
k = 3
return [9, 8, 9]
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  // readable version
  const len1 = nums1.length
  const len2 = nums2.length
  let max = Array(k).fill(0)
  for (let i = Math.max(0, k - len2); i <= len1 && i <= k; i++) {
    let part1 = getMax(nums1, i)
    let part2 = getMax(nums2, k - i)
    let r = merge(part1, part2, max)
    if (r) {
      max = r
    }
  }
  return max
}

function merge (a1, a2, max) {
  const l1 = a1.length
  const l2 = a2.length
  const la = l1 + l2
  const res = Array(la)
  let i1 = 0
  let i2 = 0
  let ia = 0
  let flag = 0
  while (ia < la) {
    if (i2 >= l2 || a1[i1] > a2[i2]) {
      res[ia] = a1[i1++]
    } else if (i1 >= l1 || a1[i1] < a2[i2]) {
      res[ia] = a2[i2++]
    } else {
      let s1 = a1.slice(i1).join('')
      let s2 = a2.slice(i2).join('')
      if (s1 + s2 > s2 + s1) {
        res[ia] = a1[i1++]
      } else {
        res[ia] = a2[i2++]
      }
    }

    // check if the current result is smaller than current 'max'
    if (res[ia] > max[ia]) {
      flag = 1
    } else if (!flag && res[ia] < max[ia]) {
      // early return when the current result is smaller than 'max'
      return
    }
    ia++
  }

  return res
}

function getMax (nums, k) {
  const len = nums.length
  const stk = []
  const res = []
  if (k === len) return nums
  let i = 0
  let rest = k
  while (res.length < k) {
    while (len - i > rest - 1) {
      while (stk.length && (stk[stk.length - 1] < nums[i])) {
        stk.pop()
      }
      stk.push(nums[i])
      i++
    }
    res.push(stk.shift())
    rest--
  }

  return res
}

let tc = [
  [[1], [0], 1],
  [[1], [1], 2],
  [[3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5],
  [[6, 7], [6, 0, 4], 5],
  [[3, 9], [8, 9], 3],
  [[6, 6, 7], [6, 6, 9, 4], 7],
  [[1, 1, 1], [1, 1, 1], 5],
  [[9], [1, 2], 2],
  [[1, 7, 5], [8, 6, 9], 3],
  [[6, 6, 8], [9], 3],
  [[0, 5, 6], [7, 0], 5],
  [[0, 5], [0], 3],
  [[0, 1], [0, 1, 0], 5],
  [[9, 6, 9, 9, 7], [9, 7], 6],
  [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100],
  [[1, 1], [1, 3], 4]
]

let ans = [
  [1],
  [1, 1],
  [9, 8, 6, 5, 3],
  [6, 7, 6, 0, 4],
  [9, 8, 9],
  [6, 6, 9, 6, 6, 7, 4],
  [1, 1, 1, 1, 1],
  [9, 2],
  [9, 7, 5],
  [9, 6, 8],
  [7, 0, 5, 6, 0],
  [0, 5, 0],
  [0, 1, 0, 1, 0],
  [9, 9, 9, 9, 7, 7],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 3, 1, 1]
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i].join()
  let r = maxNumber(...tc[i]).join()
  console.log(a === r)
}
