// 77. Combinations

const data = [
  {
    input: [4, 2],
    ans: [
      [2, 4],
      [3, 4],
      [2, 3],
      [1, 2],
      [1, 3],
      [1, 4]
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
