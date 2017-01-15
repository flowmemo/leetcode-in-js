'use strict'
const assert = require('assert')
const util = require('util')
const cloneDeep = require('lodash').cloneDeep
const I = x => x
function normalChecker (fsolve, data, options = {}) {
  const inProcessor = options.inProcessor || I
  const outProcessor = options.outProcessor || I
  const ansProcessor = options.ansProcessor || I
  for (const {input, ans} of data) {
    const originInput = cloneDeep(input)
    const output = outProcessor(fsolve(...inProcessor(input)))
    const errMsg = 'input:\n' + util.inspect(originInput, {colors: true}) + '\noutput:\n' +
    util.inspect(output, {colors: true}) + '\nans:\n' + util.inspect(ans, {colors: true})
    assert.deepStrictEqual(output, ansProcessor(ans), errMsg)
  }
}

module.exports = {
  normalChecker
}
