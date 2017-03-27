'use strict'
function less (a, b) {
  return a < b
}

function greater (a, b) {
  return a > b
}

function swap (arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

function reverse (arr, first, last) {
  let right = last - 1
  while (first < right) {
    const tmp = arr[first]
    arr[first] = arr[right]
    arr[right] = tmp
    ++first
    --right
  }
}

/**
 * Finds the position of the first element in an ordered range that has a value not less than specified value.
 * @param {Array} arr - array to search
 * @param {number} first - beginning index to search
 * @param {number} last - past-the-end index to search.
 * @param {number} val - value to compare the elements to.
 * @param {function} [comp] - custom comparator. If ommited then `<` is used.
 * @return {number} index - pointing to the first element that is not less than value, or `last` if no such element is found.
 */
function lowerBound (arr, first, last, val, comp = less) {
  let count = last - first
  while (count !== 0) {
    const half = count >> 1
    const mid = first + half
    if (comp(arr[mid], val)) {
      first = mid + 1
      count -= half + 1
    } else {
      count = half
    }
  }
  return first
}

/**
 * Finds the position of the first element in an ordered range that has a value that is greater than a specified value.
 * @param {Array} arr - array to search
 * @param {number} first - beginning index to search
 * @param {number} last - past-the-end index to search.
 * @param {number} val - value to compare the elements to.
 * @param {function} [comp] - custom comparator.
 * @return {number} index - pointing to the first element that is greater than value, or `last` if no such element is found.
 */
function upperBound (arr, first, last, val, comp = less) {
  let count = last - first
  while (count !== 0) {
    const half = count >> 1
    const mid = first + half
    if (comp(val, arr[mid])) {
      count = half
    } else {
      first = mid + 1
      count -= half + 1
    }
  }
  return first
}

/**
 * Determin whether [first, last) of sorted `arr` contains `val`
 * @param {Array} arr - array to search
 * @param {number} first - beginning index to search
 * @param {number} last - past-the-end index to search.
 * @param {number} val - value to compare the elements to.
 * @param {function} [comp] - custom comparator.
 * @return {bool} whether [first, last) contains `val`
 */
function binarySearch (arr, first, last, val, comp = less) {
  const it = lowerBound.apply(this, arguments)
  if (it < last && arr[it] === val) return true
  return false
}

/**
 * Given an ordered range, finds the subrange in which all elements are equivalent to a given value.
 * @param {Array} arr - array to search
 * @param {number} first - beginning index to search
 * @param {number} last - past-the-end index to search.
 * @param {number} val - value to compare the elements to.
 * @param {function} [comp] - custom comparator.
 * @return {[number, number]} whether [first, last) contains `val`
 */
function equalRange (arr, first, last, val, comp = less) {
  return [
    lowerBound.apply(this, arguments),
    upperBound.apply(this, arguments)
  ]
}

module.exports = {
  less,
  greater,
  lowerBound,
  upperBound,
  equalRange,
  binarySearch,
  swap,
  reverse
}
