const path = require('path')
const process = require('process')

const file = process.argv[2]
const filepath = path.resolve(process.cwd(), file)
const solution = require(filepath)
const id = path.basename(file).slice(0, 3)
const {data, checker, options} = require(`./solution/${id}.js`)
checker(solution, data, options)
