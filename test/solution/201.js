// 201. Bitwise AND of Numbers Range

const data = [
  {
    input: [0, 0],
    ans: 0
  },
  {
    input: [5, 7],
    ans: 4
  },
  {
    input: [4242, 543524432],
    ans: 0
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
