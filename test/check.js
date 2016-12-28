const assert = require('assert')
const util = require('util')

const file = process.argv[2]
const solution = require(`../${file}`)
const id = file.slice(0, 3)
const fixtures = require(`./fixtures/${id}.js`)
for (const {input, ans} of fixtures) {
  const output = solution(...input)
  const errMsg = 'input is :\n' + util.inspect(input, {colors: true}) + '\noutput is :\n' +
    util.inspect(output,{colors: true}) + '\nans is :\n' +  util.inspect(ans,{colors: true})
  assert.deepStrictEqual(output, ans, errMsg)
}
