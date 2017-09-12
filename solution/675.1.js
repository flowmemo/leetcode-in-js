/*
You are asked to cut off trees in a forest for a golf event. The forest is represented as a non-negative 2D map, in this map:

0 represents the obstacle can't be reached.
1 represents the ground can be walked through.
The place with number bigger than 1 represents a tree can be walked through, and this positive number represents the tree's height.
You are asked to cut off all the trees in this forest in the order of tree's height - always cut off the tree with lowest height first. And after cutting, the original place has the tree will become a grass (value 1).

You will start from the point (0, 0) and you should output the minimum steps you need to walk to cut off all the trees. If you can't cut off all the trees, output -1 in that situation.

You are guaranteed that no two trees have the same height and there is at least one tree needs to be cut off.

Example 1:
Input: 
[
 [1,2,3],
 [0,0,4],
 [7,6,5]
]
Output: 6
Example 2:
Input: 
[
 [1,2,3],
 [0,0,0],
 [7,6,5]
]
Output: -1
Example 3:
Input: 
[
 [2,3,4],
 [0,0,5],
 [8,7,6]
]
Output: 6
Explanation: You started from the point (0,0) and you can cut off the tree in (0,0) directly without walking.
Hint: size of the given matrix will not exceed 50x50.
*/

/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function (forest) {
  'use strict'
  const vis1 = Array(50).fill().map(() => Array(50).fill())
  const vis2 = Array(50).fill().map(() => Array(50).fill())
  const d = [0, 1, 0, -1, 0]
  const m = forest.length
  const n = forest[0].length
  const v = []
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (forest[i][j] > 1) {
        v.push([forest[i][j], [i, j]])
      }
    }
  }

  v.push([-Infinity, [0, 0]])
  v.sort((a, b) => a[0] - b[0])

  function calc (i, j) {
    for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
        vis1[i][j] = -1
        vis2[i][j] = -1
      }
    }

    let q1 = []
    let q2 = []
    vis1[v[i][1][0]][v[i][1][1]] = 0
    vis2[v[j][1][0]][v[j][1][1]] = 0

    q1.push([v[i][1][0], v[i][1][1]])
    q2.push([v[j][1][0], v[j][1][1]])

    while (q1.length && q2.length) {
      let q, vv, cvv
      if (q1.length < q2.length) {
        q = q1
        vv = vis1
        cvv = vis2
      } else {
        q = q2
        vv = vis2
        cvv = vis1
      }
      const p = q.shift()

      const x = p[0]
      const y = p[1]
      const len = vv[x][y]

      if (cvv[x][y] !== -1) return cvv[x][y] + len

      for (let i = 0; i < 4; ++i) {
        let nx = x + d[i]
        let ny = y + d[i + 1]

        if (nx >= 0 && nx < m &&
          ny >= 0 && ny < n &&
          vv[nx][ny] === -1 &&
          forest[nx][ny] !== 0) {
          vv[nx][ny] = len + 1
          q.push([nx, ny])
        }
      }
    }

    return -1
  }
  let ret = 0
  for (let i = 0; i < v.length - 1; ++i) {
    let d = calc(i, i + 1)
    if (d === -1) return -1
    ret += d
  }

  return ret
}

module.exports = cutOffTree
