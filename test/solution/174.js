// 174. Dungeon Game

const data = [
  {
    input: [[[0]]],
    ans: 1
  },
  {
    input: [[[2], [1]]],
    ans: 1
  },
  {
    input: [[[0, 0]]],
    ans: 1
  },
  {
    input: [[[-3], [-7]]],
    ans: 11
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
