const fs = require('fs')
const validFile = /^\d{3}(\.\d+)?\.js$/
const cloneDeep = require('lodash').cloneDeep

fs.readdir('./solution', (err, allFiles) => {
  'use strict'
  if (err) throw err
  let fail = 0
  let stat = Object.create(null)
  const files = allFiles.filter(file => validFile.test(file))
  for (let file of files) {
    const id = file.slice(0, 3)
    try {
      const fixtures = cloneDeep(require(`./solution/${id}.js`))
      const { data, checker, option } = fixtures
      const solution = require(`../solution/${file}`)
      console.log(`test ${file} ...`)
      checker(solution, data, option)
      console.log(`${file} passed`)
    } catch (err) {
      fail++
      const errType = err.name
      if (!stat[errType]) stat[errType] = []
      stat[errType].push(file)
      console.log(file)
      console.log(err)
      console.log()
    }
  }
  console.log(stat)
  console.log(fail, files.length)
  if (fail) throw new Error()
})
