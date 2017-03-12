// 223. Rectangle Area

const data = [
  {
    input: [-2,
      -2, 2, 2, -2, -2, 2, 2],
    ans: 16
  },
  {
    input: [0, 0, 0, 0, -1, -1, 1, 1],
    ans: 4
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
