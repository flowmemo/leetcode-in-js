/*
373. Find K Pairs with Smallest Sums
You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

Define a pair (u,v) which consists of one element from the first array and one element from the second array.

Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

Example 1:
Given nums1 = [1,7,11], nums2 = [2,4,6],  k = 3

Return: [1,2],[1,4],[1,6]

The first 3 pairs are returned from the sequence:
[1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
Example 2:
Given nums1 = [1,1,2], nums2 = [1,2,3],  k = 2

Return: [1,1],[1,1]

The first 2 pairs are returned from the sequence:
[1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
Example 3:
Given nums1 = [1,2], nums2 = [3],  k = 3 

Return: [1,3],[2,3]

All possible pairs are returned from the sequence:
[1,3],[2,3]
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
const PQ = require('./priority-queue.js')
var kSmallestPairs = function (nums1, nums2, k) {
  const len1 = nums1.length
  const len2 = nums2.length
  k = Math.min(k, len1 * len2)
  const q = new PQ(k, (a, b) => {
    return nums1[a[0]] + nums2[a[1]] - nums1[b[0]] - nums2[b[1]]
  })
  const visited = new Set()
  q.add([0, 0])
  visited.add([0, 0].join())
  const res = []
  for (let i = 0; i < k; i++) {
    const cur = q.poll()
    if (!cur) break
    res.push([nums1[cur[0]], nums2[cur[1]]])
    let [x, y] = cur
    if (x + 1 < k && x + 1 < len1 && !visited.has([x + 1, y].join())) {
      q.add([x + 1, y])
      visited.add([x + 1, y].join())
    }
    if (y + 1 < k && y + 1 < len2 && !visited.has([x, y + 1].join())) {
      q.add([x, y + 1])
      visited.add([x, y + 1].join())
    }
  }
  return res
}
let tc = [
  [
    [1, 7, 11], [2, 4, 6], 9
  ],
  [
    [1, 1, 2], [1, 2, 3], 9
  ],
  [
    [1, 2], [3], 3
  ],
  [
    [1, 88], [1, 2], 4
  ],
  [
    [1, 3], [2, 4], 4
  ],
  [[], [], 5]
]

let ans = [
  [
    [1, 2], [1, 4], [1, 6], [7, 2], [7, 4], [11, 2], [7, 6], [11, 4], [11, 6]
  ],
  [
    [1, 1], [1, 1], [1, 2], [2, 1], [1, 2], [2, 2], [1, 3], [1, 3], [2, 3]
  ],
  [
    [1, 3], [2, 3]
  ],
  [
    [1, 1], [1, 2], [88, 1], [88, 2]
  ],
  [
    [1, 2], [3, 2], [1, 4], [3, 4]
  ],
  []
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = kSmallestPairs(...tc[i])
  // console.log(a, r)
  for (let j = 0; j < a.length; j++) {
    if (a[0] + a[1] !== r[0] + r[1]) {
      console.log(false, j)
      break
    }
  }
  console.log(true)
}
