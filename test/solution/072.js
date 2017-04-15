// 72. Edit Distance

const data = [
  {
    input: ['a', 'bbb'],
    ans: 3
  },
  {
    input: ['', ''],
    ans: 0
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
