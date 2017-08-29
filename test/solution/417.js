// 417. Pacific Atlantic Water Flow

const data = [
  {
    input: [[
      [1, 2, 2, 3, 5],
      [3, 2, 3, 4, 4],
      [2, 4, 5, 3, 1],
      [6, 7, 1, 4, 5],
      [5, 1, 1, 2, 4]
    ]],
    ans: [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]
  }
]

function sort (res) {
  'use strict'
  return res.sort((a, b) => {
    return a[0] - b[0] || a[1] - b[1]
  })
}

const option = {
  outProcessor: sort
}
module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
