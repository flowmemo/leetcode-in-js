// 556. Next Greater Element III

const data = [
  {
    input: [12],
    ans: 21
  },
  {
    input: [21],
    ans: -1
  },
  {
    input: [13],
    ans: 31
  },
  {
    input: [2147483647],
    ans: -1
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
