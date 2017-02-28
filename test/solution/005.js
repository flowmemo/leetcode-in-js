// 5. Longest Palindromic Substring
const data = [
  {
    input: ['babad'],
    ans: 'bab'
  },
  {
    input: ['cbbd'],
    ans: 'bb'
  },
  {
    input: ['a'],
    ans: 'a'
  },
  {
    input: ['abc'],
    ans: 'a'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
