const assert = require('assert')
const fs = require('fs')
const validFile = /^\d{3}(\.\d+)?\.js$/

const file = process.argv[2]
const solution = require(`../${file}`)
const id = file.slice(0, 3)
const fixtures = require(`./fixtures/${id}.js`)
for (const {input, ans} of fixtures) {
  const output = solution(...input)
  const errMsg = 'input is :\n' + input + '\noutput is :\n' +
    output + '\nans is :\n' + ans
  assert.deepStrictEqual(output, ans, errMsg)
}
