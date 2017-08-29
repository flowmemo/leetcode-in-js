// 36. Valid Sudoku

const data = [
  {
    input: [
      ['.87654321',
        '2........',
        '3........',
        '4........',
        '5........',
        '6........',
        '7........',
        '8........',
        '9........']
    ],
    ans: true
  },
  {
    input: [
      ['.87654321',
        '2........',
        '3........',
        '4........',
        '5........',
        '6........',
        '7........',
        '8........',
        '2........']
    ],
    ans: false
  }
]

const option = {
  inProcessor: input => {
    input[0] = input[0].map(line => line.split(''))
    return input
  }
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
