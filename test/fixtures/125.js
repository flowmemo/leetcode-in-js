// 125. Valid Palindrome
const data = [
  {
    input: ['A man, a plan, a canal: Panama'],
    ans: true
  },
  {
    input: ['race a car'],
    ans: false
  },
  {
    input: [' '],
    ans: true
  }
]

const checker = require('../checkers.js').normalChecker
module.exports = {
  data,
  checker
}
