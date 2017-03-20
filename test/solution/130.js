// 130. Surrounded Regions

const assert = require('assert')
const cloneDeep = require('lodash').cloneDeep
const util = require('util')

const data = [
  {
    input: [[
      'XXXX',
      'XOOX',
      'XXOX',
      'XOXX'
    ]],
    inputShouldBecome: [
      'XXXX',
      'XXXX',
      'XXXX',
      'XOXX'
    ]
  }
]

const options = {
  inProcessor: input => {
    input[0] = input[0].map(line => line.split(''))
    return input
  },
  outProcessor: output => output.map(line => line.join(''))
}
const checker = function (fsolve, data, options) {
  const inProcessor = options.inProcessor || (d => d)
  for (const {input, ans, inputShouldBecome} of data) {
    const origin = cloneDeep(input)
    const result = fsolve(...inProcessor(input))
    input[0] = input[0].map(line => line.join(''))
    const errMsg1 = 'input:\n' + util.inspect(origin, { colors: true }) + '\noutput:\n' +
      util.inspect(result, { colors: true }) + '\nans:\n' + util.inspect(ans, { colors: true })
    assert.deepStrictEqual(result, ans, errMsg1)

    const errMsg2 = 'original input:\n' + util.inspect(origin, { colors: true }) + '\nafter:\n' +
      util.inspect(input[0], { colors: true }) + '\nexpected:\n' + util.inspect(inputShouldBecome, { colors: true })
    assert.deepStrictEqual(input[0], inputShouldBecome, errMsg2)
  }
}

module.exports = {
  data,
  options,
  checker
}
