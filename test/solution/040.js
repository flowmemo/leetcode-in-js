// 40. Combination Sum II

const data = [
  {
    input: [[2, 3, 6, 7], 7],
    ans: [
      [7]
    ]
  },
  {
    input: [[10, 1, 2, 7, 6, 1, 5], 8],
    ans: [
      [1, 7],
      [1, 2, 5],
      [2, 6],
      [1, 1, 6]
    ]
  }
]

function sort2dArray (arr) {
  for (let line of arr) {
    line.sort((a, b) => a - b)
  }
  return arr.sort()
}

for (let { ans } of data) {
  sort2dArray(ans)
}
const option = {
  outProcessor: sort2dArray
}
module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
