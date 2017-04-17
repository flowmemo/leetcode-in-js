// 543. Diameter of Binary Tree

const { buildFromArray } = require('../../helper/BinaryTree')
const data = [
  {
    input: [[5, 2, -3]],
    ans: [2, -3, 4]
  },
  {
    input: [[5, 2, -5]],
    ans: [2]
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
