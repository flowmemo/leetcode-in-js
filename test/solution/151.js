// 151. Reverse Words in a String

const data = [
  {
    input: ['the sky is blue'],
    ans: 'blue is sky the'
  },
  {
    input: ['  the  sky   is blue'],
    ans: 'blue is sky the'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
