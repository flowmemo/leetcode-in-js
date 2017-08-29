// 491. Increasing Subsequences

const data = [
  {
    input: [[4, 6, 7, 7]],
    ans: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7, 7], [4, 7, 7]]
  },
  {
    input: [[1, 1, 1]],
    ans: [[1, 1, 1], [1, 1]]
  }
]

for (const { ans } of data) {
  ans.sort()
}

const option = {
  outProcessor: output => output.sort()
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
