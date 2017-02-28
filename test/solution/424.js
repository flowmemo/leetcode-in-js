// 424. Longest Repeating Character Replacement

const data = [
  {
    input: ['ABAB', 2],
    ans: 4
  },
  {
    input: ['AABABBA', 1],
    ans: 4
  },
  {
    input: ['BAAA', 0],
    ans: 3
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
