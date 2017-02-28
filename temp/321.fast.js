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
  // fast version
  const len1 = nums1.length
  const len2 = nums2.length
  let max = Array(k).fill(0)
  for (let i = Math.max(0, k - len2); i <= len1 && i <= k; i++) {
    let part1 = getMax(nums1, i, len1)
    let part2 = getMax(nums2, k - i, len2)
    let r = merge(part1, part2, i, k - i, max)
    if (r) {
      max = r
    }
  }
  return max
}
function merge (a1, a2, l1, l2, max) {
  /*
  testcase:
    merge('110', '11') => 11110
    merge('112', '11') => 11211
  */
  const la = l1 + l2
  const res = Array(la)
  let i1 = 0
  let i2 = 0
  let ia = 0
  let flag = 0
  while (ia < la) {
    if (a1[i1] === a2[i2]) {
      /*
      Optimize for the following cases:
        merge([1, 1, 1, 2], [1, 1, 1, 3])
        merge([1, 2, 3, 4, 5], [1, 2, 3, 4, 6])
      */
      let j1 = i1
      let j2 = i2
      while (j1 < l1 && j2 < l2 && a1[j1] === a2[j2]) {
        j1++
        j2++
      }
      let i = i1
      for (let same = a1[i1]; a1[i] === same && i < j1; i++) {
        res[ia] = same

        // check if the current result is smaller than current 'max'
        if (res[ia] > max[ia]) {
          flag = 1
        } else if (!flag && res[ia] < max[ia]) {
          return
        }
        ia++
      }
      if (greater(a1, j1, l1, a2, j2, l2)) {
        i1 = i1 + (i - i1)
      } else {
        i2 = i2 + (i - i1)
      }
      continue
    }

    if (i2 >= l2 || a1[i1] > a2[i2]) {
      res[ia] = a1[i1++]
    } else if (i1 >= l1 || a1[i1] < a2[i2]) {
      res[ia] = a2[i2++]
    }

    // check if the current result is smaller than current 'max'
    if (res[ia] > max[ia]) {
      flag = 1
    } else if (!flag && res[ia] < max[ia]) {
      // early return if the current result is smaller than 'max'
      return
    }
    ia++
  }
  return res
}

function getMax (nums, k, len) {
  const res = Array(k)
  let rest = k
  let bottom = 0
  // Note: rest + bottom === k
  let i = 0
  let j = 0
  while (rest) {
    while (len - i - 1 >= rest - 1) {
      while (j > bottom && nums[i] > res[j - 1]) {
        j--
      }
      if (j < k) {
        res[j] = nums[i]
        j++
      }
      i++
    }
    bottom++
    rest--
  }
  return res
};

function greater (n1, i1, l1, n2, i2, l2) {
  // `greater` is equivalent to (n1, n2) => {return n1.join('') > n2.join('')}
  while (i1 < l1 && i2 < l2) {
    if (n1[i1] > n2[i2]) return true
    else if (n1[i1] < n2[i2]) return false
    i1++
    i2++
  }

  if (i1 < l1) {
    return true
  } else return false
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
