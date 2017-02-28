// 115. Distinct Subsequences
const data = [
  {
    input: ['aaa', 'aa'],
    ans: 3
  },
  {
    input: ['rabbbit', 'rabbit'],
    ans: 3
  },
  {
    input: ['aaabbbccc', 'abc'],
    ans: 27
  }
]

const checker = require('../checkers.js').normalChecker
module.exports = {
  data,
  checker
}
