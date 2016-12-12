const assert = require('assert')
const fs = require('fs')
const validFile = /^\d{3}(\.\d+)?\.js$/
fs.readdir('./', (err, allFiles) => {
  if (err) throw err
  const files = allFiles.filter(file => validFile.test(file))
  for (let file of files) {
    console.log(file, '...')
    const id = file.slice(0, 3)
    const fixtures = require(`./fixtures/${id}.js`)
    const solution = require(`../${file}`)
    for (const {input, ans} of fixtures) {
      const output = solution(...input)
      const errMsg = 'input is :\n' + input + '\noutput is :\n' +
        output + '\nans is :\n' + ans
      assert.deepStrictEqual(output, ans, errMsg)
    }
  }
})
