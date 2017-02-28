// 419. Battleships in a Board

const data = [
  {
    input: [['X..X', '...X', '...X']],
    ans: 2
  }
]

const options = {
  inProcessor: input => {
    'use strict'
    input[0] = input[0].map(line => line.split(''))
    return input
  }
}
module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
