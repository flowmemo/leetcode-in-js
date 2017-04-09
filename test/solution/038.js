// 38. Count and Say

const data = [
  {
    input: [1],
    ans: '1'
  },
  {
    input: [10],
    ans: '13211311123113112211'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
