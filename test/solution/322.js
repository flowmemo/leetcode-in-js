// 322. Coin Change

const data = [
  {
    input: [[1, 2, 5], 11],
    ans: 3
  }, {
    input: [[2], 3],
    ans: -1
  },
  {
    input: [[2], 1],
    ans: -1
  },
  {
    input: [[1], 1],
    ans: 1
  },
  {
    input: [[1], 0],
    ans: 0
  },
  {
    input: [[186, 419, 83, 408], 6249],
    ans: 20
  },
  {
    input: [[336, 288, 378, 16, 319, 146], 9212],
    ans: 26
  },
  {
    input: [[[288, 160, 10, 249, 40, 77, 314, 429], 9208]],
    ans: -1
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
