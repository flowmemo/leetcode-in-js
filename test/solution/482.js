// 482. License Key Formatting

const data = [
  {
    input: ['2-4A0r7-4k', 4],
    ans: '24A0-R74K'
  },
  {
    input: ['2-4A0r7-4k', 3],
    ans: '24-A0R-74K'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
