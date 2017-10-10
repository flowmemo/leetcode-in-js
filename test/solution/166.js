// 166. Fraction to Recurring Decimal 

const data = [
  {
    input: [1, -1],
    ans: '-1'
  },
  {
    input: [1, 9],
    ans: '0.(1)'
  },
  {
    input: [1, 990],
    ans: '0.0(01)'
  },
  {
    input: [1 << 31, -1],
    ans: '2147483648'
  },
  {
    input: [1, 1 << 31],
    ans: '-0.0000000004656612873077392578125'
  },
  {
    input: [42432, 3070],
    ans: '13.8(214983713355048859934853420195439739413680781758957654723127035830618892508143322475570032573289902280130293159609120521172638436482084690553745928338762)'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
