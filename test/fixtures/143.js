// 143. Reorder List

const assert = require('assert')
const util = require('util')
const {buildFromArray, convertToArray} = require('../LinkedList.js')

const data = [
  {
    input: [[1, 2, 3]],
    inputShouldBecome: [[1, 3, 2]]
  },
  {
    input: [[1, 2, 3, 4]],
    inputShouldBecome: [[1, 4, 2, 3]]
  },
  {
    input: [[]],
    inputShouldBecome: [[]]
  }
]

const options = {
  inProcessor: input => input.map(buildFromArray)
}

const checker = function (fsolve, data, options) {
  const inProcessor = options.inProcessor || (d => d)
  for (const {input, ans, inputShouldBecome} of data) {
    const root = inProcessor(input)[0]
    const result = fsolve(root)
    const errMsg1 = 'input:\n' + util.inspect(input, { colors: true }) + '\noutput:\n' +
      util.inspect(result, { colors: true }) + '\nans:\n' + util.inspect(ans, { colors: true })
    assert.deepStrictEqual(result, ans, errMsg1)
    const inputAfter = [convertToArray(root)]
    const errMsg2 = 'original input:\n' + util.inspect(input, { colors: true }) + '\nafter:\n' +
      util.inspect(inputAfter, { colors: true }) + '\nexpected:\n' + util.inspect(inputShouldBecome, { colors: true })
    assert.deepStrictEqual(inputAfter, inputShouldBecome, errMsg2)
  }
}

module.exports = {
  data,
  checker,
  options
}

