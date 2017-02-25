// 90. Subsets II
const data = [
  {
    input: [[1, 2, 2]],
    ans: [
      [2],
      [1],
      [1, 2, 2],
      [2, 2],
      [1, 2],
      []
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

function sort2dArray (subsets) {
  'use strict'
  for (let set of subsets) {
    set.sort((a, b) => a - b)
  }
  subsets.sort()
  return subsets
}
