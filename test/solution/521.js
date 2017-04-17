// 521. Longest Uncommon Subsequence I

const data = [
  {
    input: ['aba', 'cdc'],
    ans: 3
  },
  {
    input: ['abc', 'abc'],
    ans: -1
  },
  {
    input: ['aa', 'aaa'],
    ans: 3
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
