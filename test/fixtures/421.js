// 421. Maximum XOR of Two Numbers in an Array

const data = [
  {
    input: [[3, 10, 5, 25, 2, 8]],
    ans: 28
  },
  {
    input: [[4, 56, 25, 36, 14]],
    ans: 61
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
