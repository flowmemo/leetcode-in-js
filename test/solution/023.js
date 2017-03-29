// 23. Merge k Sorted Lists

const { buildFromArray, convertToArray } = require('../../helper/LinkedList.js')

const data = [
  {
    input: [[[], []]],
    ans: []
  },
  {
    input: [[[1, 2, 4], [3]]],
    ans: [1, 2, 3, 4]
  },
  {
    input: [[[-1, 1], [-3, 1, 4], [-2, -1, 0, 2]]],
    ans: [-3, -2, -1, -1, 0, 1, 1, 2, 4]
  }
]

const options = {
  inProcessor: input => {
    input[0] = input[0].map(buildFromArray)
    return input
  },
  outProcessor: output => convertToArray(output)
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
