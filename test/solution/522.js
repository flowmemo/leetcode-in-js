// 522. Longest Uncommon Subsequence II

const data = [
  {
    input: [['aba', 'cdc', 'eae']],
    ans: 3
  },
  {
    input: [['abc', 'abc']],
    ans: -1
  },
  {
    input: [['aaa', 'aaa', 'ab', 'a']],
    ans: 2
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
