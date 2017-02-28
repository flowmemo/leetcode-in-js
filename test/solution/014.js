// 14. Longest Common Prefix
const data = [
  {
    input: [[]],
    ans: ''
  },
  {
    input: [['aaa', 'aab']],
    ans: 'aa'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
