// 199. Binary Tree Right Side View

const { buildFromArray } = require('../../helper/BinaryTree.js')
const data = [
  {
    input: [
      [1, 2, 3, null, 5, null, 4]],
    ans: [1, 3, 4]
  }
]

const option = {
  inProcessor: input => {
    return [buildFromArray(input[0])]
  }
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
