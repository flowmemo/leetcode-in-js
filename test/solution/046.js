// 46. Permutations

const data = [
  {
    input: [[1, 2, 3]],
    ans: [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ]
  }
]

for (let {ans} of data) ans.sort()

const options = {
  outProcessor: output => output.sort()
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
