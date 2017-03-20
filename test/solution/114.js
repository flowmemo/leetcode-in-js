// 114. Flatten Binary Tree to Linked List

const assert = require('assert')
const cloneDeep = require('lodash').cloneDeep
const util = require('util')

const buildFromArray = require('../../helper/BinaryTree.js').buildFromArray
const convertToArray = require('../../helper/BinaryTree.js').convertToArray
const data = [
  {
    input: [[1, 2, 5, 3, 4, null, 6]],
    inputShouldBecome: [1, null, 2, null, 3, null, 4, null, 5, null, 6]
  },
  {
    input: [[1, 2]],
    inputShouldBecome: [1, null, 2]
  },
  {
    input: [[]],
    inputShouldBecome: []
  }
]

const checker = function (fsolve, data, options = {}) {
  const inProcessor = options.inProcessor || (d => d)
  for (const {input, ans, inputShouldBecome} of data) {
    const origin = cloneDeep(input)
    const root = inProcessor(input)[0]
    const result = fsolve(root)
    const errMsg1 = 'input:\n' + util.inspect(origin, { colors: true }) + '\noutput:\n' +
      util.inspect(result, { colors: true }) + '\nans:\n' + util.inspect(ans, { colors: true })
    assert.deepStrictEqual(result, ans, errMsg1)

    const rootArrayAfter = convertToArray(root)
    const errMsg2 = 'original input:\n' + util.inspect(origin, { colors: true }) + '\nafter:\n' +
      util.inspect(rootArrayAfter, { colors: true }) + '\nexpected:\n' + util.inspect(inputShouldBecome, { colors: true })
    assert.deepStrictEqual(rootArrayAfter, inputShouldBecome, errMsg2)
  }
}

const options = {
  inProcessor: input => input.map(buildFromArray)
}

module.exports = {
  data,
  checker,
  options
}
