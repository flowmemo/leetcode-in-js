const path = require('path')
const process = require('process')

const file = process.argv[2]
const filepath = path.resolve(process.cwd(), file)
const solution = require(filepath)
const id = path.basename(file).slice(0, 3)
const {data, checker, option} = require(`./solution/${id}.js`)
checker(solution, data, option)
