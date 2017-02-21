// 37. Sudoku Solver

const util = require('util')
const assert = require('assert')

const data = [
  {
    input: [
      ['..9748...',
        '7........',
        '.2.1.9...',
        '..7...24.',
        '.64.1.59.',
        '.98...3..',
        '...8.3.2.',
        '........6',
        '...2759..']
    ],
    inputShouldBecome: [
      '519748632',
      '783652419',
      '426139875',
      '357986241',
      '264317598',
      '198524367',
      '975863124',
      '832491756',
      '641275983']
  }
]

const options = {
  inProcessor: input => {
    input[0].map(line => Array.from(line))
    return input
  }
}
const checker = function (fsolve, data, options) {
  'use strict'
  for (const {input, inputShouldBecome} of data) {
    const board = input[0].map(line => Array.from(line))
    fsolve(board)
    const output = board.map(line => line.join(''))
    const errMsg = 'original board:\n' + util.inspect(input[0], { colors: true }) + '\nafter:\n' +
      util.inspect(output, { colors: true }) + '\nexpected:\n' + util.inspect(inputShouldBecome, { colors: true })
    assert.deepStrictEqual(output, inputShouldBecome, errMsg)
  }
}

module.exports = {
  data,
  checker,
  options
}
