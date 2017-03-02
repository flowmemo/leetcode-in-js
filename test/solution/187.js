// 187. Repeated DNA Sequences

const data = [
  {
    input: ['AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'],
    ans: ['AAAAACCCCC', 'CCCCCAAAAA']
  },
  {
    input: ['AAAAACCCCCAAAAACCCCCC'],
    ans: ['AAAAACCCCC']
  },
  {
    input: ['A'],
    ans: []
  }
]

for (let {ans} of data) ans.sort()

const options = {
  outProcessor: output => output.sort()
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
