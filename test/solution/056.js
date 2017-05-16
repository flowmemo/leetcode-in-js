// 56. Merge Intervals

const data = [
  {
    input: [[[1, 3], [2, 6], [8, 10], [15, 18]]],
    ans: [[1, 6], [8, 10], [15, 18]]
  },
  {
    input: [[[1, 6], [8, 10], [15, 18]]],
    ans: [[1, 6], [8, 10], [15, 18]]
  }
]

function Interval (start, end) {
  'use strict'
  this.start = start
  this.end = end
}

const options = {
  inProcessor: input => {
    input[0] = input[0].map(a => new Interval(...a))
    return input
  },
  outProcessor: output => {
    return output.map(a => [a.start, a.end])
  }
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
