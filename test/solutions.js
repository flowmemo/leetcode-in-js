const fs = require('fs')
const validFile = /^\d{3}(\.\d+)?\.js$/

fs.readdir('./solution', (err, allFiles) => {
  if (err) throw err
  let fail = 0
  let stat = Object.create(null)
  const files = allFiles.filter(file => validFile.test(file))
  for (let file of files) {
    const id = file.slice(0, 3)
    try {
      const fixtures = require(`./solution/${id}.js`)
      const {data, checker, options} = fixtures
      const solution = require(`../solution/${file}`)
      checker(solution, data, options)
    } catch (err) {
      fail++
      const errType = err.name
      if (!stat[errType]) stat[errType] = []
      stat[errType].push(file)
    }
  }
  console.log(stat)
  console.log(fail, files.length)
  if (fail) throw new Error()
})
