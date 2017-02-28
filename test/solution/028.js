// 28. Implement strStr()

const data = [
  {
    input: ['BBC ABCDAB ABCDABCDABDE', 'ABCDABD'],
    ans: 15
  },
  {
    input: ['', ''],
    ans: 0
  },
  {
    input: ['a', ''],
    ans: 0
  },
  {
    input: ['ABCABCABD', 'ABCABD'],
    ans: 3
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
