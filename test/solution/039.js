// 39. Combination Sum
const data = [
  {
    input: [[2, 3, 6, 7], 7],
    ans: [
      [7],
      [2, 2, 3]
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
