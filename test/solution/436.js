// 436. Find Right Interval

const data = [
  {
    input: [[ [1, 2] ]],
    ans: [-1]
  },
  {
    input: [[ [3, 4], [2, 3], [1, 2] ]],
    ans: [-1, 0, 1]
  },
  {
    input: [[ [1, 4], [2, 3], [3, 4] ]],
    ans: [-1, 2, -1]
  }
]

const option = {
  inProcessor: input => [input[0].map(v => new Interval(v[0], v[1]))]
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}

function Interval (start, end) {
  this.start = start
  this.end = end
}
