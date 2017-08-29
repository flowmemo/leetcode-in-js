// 57. Insert Interval

const data = [
  {
    input: [[[1, 3], [6, 9]], [2, 5]],
    ans: [[1, 5], [6, 9]]
  },
  {
    input: [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 9]],
    ans: [[1, 2], [3, 10], [12, 16]]
  }
]

function Interval (start, end) {
  'use strict'
  this.start = start
  this.end = end
}

const option = {
  inProcessor: input => {
    input[0] = input[0].map(a => new Interval(...a))
    input[1] = new Interval(...input[1])
    return input
  },
  outProcessor: output => {
    return output.map(a => [a.start, a.end])
  }
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
