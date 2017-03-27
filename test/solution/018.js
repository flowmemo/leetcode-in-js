// 18. 4Sum

const data = [
  {
    input: [[1, 0, -1, 0, -2, 2], 0],
    ans: [
  [-1, 0, 0, 1],
  [-2, -1, 1, 2],
  [-2, 0, 0, 2]
    ]
  }
]

for (const {ans} of data) {
  sort2dArray(ans)
}

const options = {
  outProcessor: sort2dArray
}
module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}

function sort2dArray (arr) {
  for (let line of arr) {
    line.sort((a, b) => a - b)
  }
  return arr.sort()
}
