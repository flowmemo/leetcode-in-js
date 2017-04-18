// 553. Optimal Division

const data = [
  {
    input: [[1000, 100, 10, 2]],
    ans: '1000/(100/10/2)'
  },
  {
    input: [[100, 10, 1000, 3]],
    ans: '100/(10/1000/3)'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
