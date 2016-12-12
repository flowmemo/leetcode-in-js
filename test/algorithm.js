const assert = require('assert')
const algorithm = require('../algorithm.js')
const {
  less,
  greater,
  upperBound,
  lowerBound,
  equalRange,
  binarySearch
} = algorithm
const tc1 = [1, 2, 2, 3, 3, 4, 5, 5, 5]
const tc2 = tc1.slice()
tc2.reverse()
// tc2 = [5, 5, 5, 4, 3, 3, 2, 2, 1]

// less
assert.strictEqual(less(1, 2), true)
assert.strictEqual(less(2, 1), false)
assert.strictEqual(less(1, 1), false)
assert.strictEqual(less('a', 'b'), true)

// greater
assert.strictEqual(greater(1, 2), false)
assert.strictEqual(greater(2, 1), true)
assert.strictEqual(greater(1, 1), false)
assert.strictEqual(greater('a', 'b'), false)

// lowerBound
assert.strictEqual(lowerBound(tc1, 0, tc1.length, 0), 0)
assert.strictEqual(lowerBound(tc1, 0, tc1.length, 2), 1)
assert.strictEqual(lowerBound(tc1, 0, tc1.length, 4), 5)
assert.strictEqual(lowerBound(tc1, 0, tc1.length, 5), 6)

assert.strictEqual(lowerBound(tc2, 0, tc2.length, 0, greater), 9)

// upperBound
assert.strictEqual(upperBound(tc1, 0, tc1.length, 0), 0)
assert.strictEqual(upperBound(tc1, 0, tc1.length, 2), 3)
assert.strictEqual(upperBound(tc1, 0, tc1.length, 4), 6)
assert.strictEqual(upperBound(tc1, 0, tc1.length, 5), 9)

assert.strictEqual(upperBound(tc2, 0, tc2.length, 0, greater), 9)

// equalRange
assert.deepStrictEqual(equalRange(tc1, 0, tc1.length, 0), [0, 0])
assert.deepStrictEqual(equalRange(tc1, 0, tc1.length, 2), [1, 3])
assert.deepStrictEqual(equalRange(tc1, 0, tc1.length, 4), [5, 6])
assert.deepStrictEqual(equalRange(tc1, 0, tc1.length, 7), [9, 9])

assert.deepStrictEqual(equalRange(tc2, 0, tc2.length, 2, greater), [6, 8])

// binarySearch
assert.strictEqual(binarySearch(tc1, 0, tc1.length, 1), true)
assert.strictEqual(binarySearch(tc1, 0, tc1.length, 2), true)
assert.strictEqual(binarySearch(tc1, 0, tc1.length, 5), true)
assert.strictEqual(binarySearch(tc1, 0, tc1.length, -1), false)

assert.strictEqual(binarySearch(tc2, 0, tc2.length, 1, greater), true)

