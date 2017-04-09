// 539. Minimum Time Difference

const data = [
  {
    input: [['23:59', '00:00']],
    ans: 1
  },
  {
    input: [['21:34', '00:00', '02:00', '02:10']],
    ans: 10
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
