// 564. Find the Closest Palindrome

const data = [
  {
    input: ['1'],
    ans: '0'
  },
  {
    input: ['17'],
    ans: '22'
  },
  {
    input: ['16'],
    ans: '11'
  },
  {
    input: ['11011'],
    ans: '11111'
  },
  {
    input: ['98'],
    ans: '99'
  },
  {
    input: ['123'],
    ans: '121'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
