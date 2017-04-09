/*
412. Fizz Buzz
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  'use strict'
  const res = []
  let i = 1
  while (i <= n) {
    if (i % 15 === 0) res.push('FizzBuzz')
    else if (i % 5 === 0) res.push('Buzz')
    else if (i % 3 === 0) res.push('Fizz')
    else res.push('' + i)
    ++i
  }
  return res
}

module.exports = fizzBuzz
