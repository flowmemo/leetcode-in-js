const data = [
  {
    input: ['abcabcbb'],
    ans: 3
  },
  {
    input: ['bbbbb'],
    ans: 1
  },
  {
    input: ['pwwkew'],
    ans: 3
  },
  {
    input: [''],
    ans: 0
  }
]

module.exports = {
  data,
  checker: require('../checkers').normalChecker
}
