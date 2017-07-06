// 468. Validate IP Address

const data = [
  {
    input: ['172.16.254.1'],
    ans: 'IPv4'
  },
  {
    input: ['2001:0db8:85a3:0:0:8A2E:0370:7334'],
    ans: 'IPv6'
  },
  {
    input: ['256.256.256.256'],
    ans: 'Neither'
  },
  {
    input: ['2.2.2.2.'],
    ans: 'Neither'
  },
  {
    input: ['1.1.1.1.1'],
    ans: 'Neither'
  },
  {
    input: ['0.0.0.0'],
    ans: 'IPv4'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
