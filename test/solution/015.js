// 15. 3Sum
const data = [
  {
    input: [[-1, 0, 1, 2, -1, -4]],
    ans: [
      [-1, 0, 1],
      [-1, -1, 2]
    ]
  }
]

function sort2dArray (arr) {
  for (let line of arr) {
    line.sort((a, b) => a - b)
  }
  return arr.sort()
}

for (let {ans} of data) {
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
