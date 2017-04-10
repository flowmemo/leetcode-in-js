// 520. Detect Capital

const data = [
  {
    input: ['USA'],
    ans: true
  },
  {
    input: ['FlaG'],
    ans: false
  },
  {
    input: ['Google'],
    ans: true
  },
  {
    input: ['leetcode'],
    ans: true
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
