// 412. Fizz Buzz

const data = [
  {
    input: [15],
    ans: [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz'
    ]
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
