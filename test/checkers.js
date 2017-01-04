const assert = require('assert')
const util = require('util')
const cloneDeep = require('lodash').cloneDeep

function normalChecker (fsolve, data, options = {}) {
  const inProcessor = options.inProcessor || (d => d)
  const outProcessor = options.outProcessor || (d => d)
  for (const {input, ans} of data) {
    const origin = cloneDeep(input)
    const result = outProcessor(fsolve(...inProcessor(input)))
    const errMsg = 'input:\n' + util.inspect(origin, {colors: true}) + '\noutput:\n' +
      util.inspect(result, {colors: true}) + '\nans:\n' + util.inspect(ans, {colors: true})
    assert.deepStrictEqual(result, ans, errMsg)
  }
}

module.exports = {
  normalChecker
}
