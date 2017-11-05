// 720. Longest Word in Dictionary

const data = [
  {
    input: [['w', 'wo', 'wor', 'worl', 'world']],
    ans: 'world'
  },
  {
    input: [['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple']],
    ans: 'apple'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
