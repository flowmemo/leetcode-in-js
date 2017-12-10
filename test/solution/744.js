// 744. Find Smallest Letter Greater Than Target

const data = [
  {
    input: [['a', 'b'], 'z'],
    ans: 'a'
  },
  {
    input: [['c', 'f', 'j'], 'c'],
    ans: 'f'
  },
  {
    input: [['c', 'f', 'j'], 'd'],
    ans: 'f'
  },
  {
    input: [['c', 'f', 'j'], 'g'],
    ans: 'j'
  },
  {
    input: [['c', 'f', 'j'], 'j'],
    ans: 'c'
  },
  {
    input: [['c', 'f', 'j'], 'k'],
    ans: 'c'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
