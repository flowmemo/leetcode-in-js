// 438. Find All Anagrams in a String

const data = [
  {
    input: [['cbatbac', 'abc']],
    ans: [0, 4]
  },
  {
    input: [['cbaebabacd', 'abc']],
    ans: [0, 6]
  },
  {
    input: [['abab', 'ab']],
    ans: [0, 1, 2]
  },{
    input: [['aabaa', 'aab']],
    ans: [0, 1, 2]
  },
  {
    input: [['aaaaaaa', 'aaa']],
    ans: [0, 1, 2, 3, 4]
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
