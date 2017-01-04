const assert = require('assert')

const file = process.argv[2]
const solution = require(`../${file}`)
const id = file.slice(0, 3)
const {data, checker, options} = require(`./fixtures/${id}.js`)
checker(solution, data, options)
