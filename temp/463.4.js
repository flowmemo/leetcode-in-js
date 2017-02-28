/*
463. Island Perimeter
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  'use strict'
  // bfs
  const m = grid.length
  const n = grid[0].length
  let [x, y] = (function () {
    for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
        if (grid[i][j]) return [i, j]
      }
    }
  })()
  // bfs
  const q = [[x, y]]
  grid[x][y] = -1
  function checkAdd (i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || !grid[i][j]) return 1
    else {
      if (grid[i][j] === 1) {
        grid[i][j] = -1
        q.push([i, j])
      }
      return 0
    }
  }
  let res = 0
  while (q.length) {
    let [r, c] = q.pop()
    res += checkAdd(r + 1, c)
    res += checkAdd(r - 1, c)
    res += checkAdd(r, c + 1)
    res += checkAdd(r, c - 1)
  }
  return res
}

let tc = [[0, 1, 0, 0],
 [1, 1, 1, 0],
 [0, 1, 0, 0],
 [1, 1, 0, 0]]

let r = islandPerimeter(tc)
console.log(r)
