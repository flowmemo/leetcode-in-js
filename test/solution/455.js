// 455. Assign Cookies

const data = [
  {
    input: [[1, 2, 3], [1, 1]],
    ans: 1
  },
  {
    input: [[1, 2], [1, 2, 3]],
    ans: 2
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
