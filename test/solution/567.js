// 567. Permutation in String

const data = [
  {
    input: ['ab', 'eidbaooo'],
    ans: true
  },
  {
    input: ['ab', 'eidboaoo'],
    ans: false
  },
  {
    input: ['hello', 'ooolleoooleh'],
    ans: false
  }

]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
