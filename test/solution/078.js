// 78. Subsets

const data = [
  {
    input: [[1, 2, 3]],
    ans: [
      [3],
      [1],
      [2],
      [1, 2, 3],
      [1, 3],
      [2, 3],
      [1, 2],
      []
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
