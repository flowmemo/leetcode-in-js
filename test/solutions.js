const assert = require('assert')
const fs = require('fs')
const validFile = /^\d{3}(\.\d+)?\.js$/

fs.readdir('./', (err, allFiles) => {
  if (err) throw err
  const files = allFiles.filter(file => validFile.test(file))
  for (let file of files) {
    const id = file.slice(0, 3)
    try {
      const fixtures = require(`./fixtures/${id}.js`)
      const {data, checker, options} = fixtures
      const solution = require(`../${file}`)
      checker(solution, data, options)
    } catch (err) {
      console.error(file + ' false')
    }
  }
})
