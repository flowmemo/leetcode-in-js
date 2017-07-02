// 86. Partition List

const { buildFromArray } = require('../../helper/LinkedList')
const data = [
  {
    input: [[1, 4, 3, 2, 5, 2], 3],
    ans: [1, 2, 2, 4, 3, 5]
  }
]

for (const pair of data) {
  let input = pair.input
  input[0] = buildFromArray(input[0])
  pair.ans = buildFromArray(pair.ans)
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
