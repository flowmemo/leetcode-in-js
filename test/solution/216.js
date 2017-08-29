// 216. Combination Sum III

const data = [
  {
    input: [3, 7],
    ans: [[1, 2, 4]]
  },
  {
    input: [3, 9],
    ans: [[1, 2, 6], [1, 3, 5], [2, 3, 4]]
  },
  {
    input: [9, 45],
    ans: [[1, 2, 3, 4, 5, 6, 7, 8, 9]]
  }
]

for (const { ans } of data) {
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

function sort2dArray (subsets) {
  'use strict'
  for (let set of subsets) {
    set.sort((a, b) => a - b)
  }
  subsets.sort()
  return subsets
}
