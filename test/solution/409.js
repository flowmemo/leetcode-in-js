// 409. Longest Palindrome

const data = [
  {
    input: ['abccccdd'],
    ans: 7
  },
  {
    input: ['aabb'],
    ans: 4
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
