// 96. Unique Binary Search Trees
const data = [
  {
    input: [1],
    ans: 1
  },
  {
    input: [3],
    ans: 5
  },
  {
    input: [6],
    ans: 132
  },
  {
    input: [9],
    ans: 4862
  }
]

const checker = require('../checkers.js').normalChecker
module.exports = {
  data,
  checker
}
