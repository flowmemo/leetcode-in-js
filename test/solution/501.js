// 501. Find Mode in Binary Search Tree

const { buildFromArray } = require('../../helper/BinaryTree')
const data = [
  {
    input: [[1, null, 2, 2]],
    ans: [2]
  },
  {
    input: [[2, 1, 2, 1]],
    ans: [1, 2]
  }
]

for (const { ans } of data) ans.sort()

const options = {
  inProcessor: input => input.map(buildFromArray),
  outProcessor: output => output.sort()
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
