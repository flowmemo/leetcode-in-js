/*
295. Find Median from Data Stream
Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

Examples:
[2,3,4] , the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
For example:

add(1)
add(2)
findMedian() -> 1.5
add(3)
findMedian() -> 2
*/

/**
 * @constructor
 */
const PQ = require('./priority-queue.js')
var MedianFinder = function () {
  this.small = new PQ(Infinity, (a, b) => b - a)
  this.big = new PQ(Infinity)
}

/**
 * @param {integer} word
 * @return {void}
 * Adds a num into the data structure.
 */
MedianFinder.prototype.addNum = function (num) {
  let psmall = this.small.peek()
  if (!this.small.count || num < psmall) this.small.add(num)
  else this.big.add(num)

  if (this.small.count < this.big.count) {
    this.small.add(this.big.poll())
  } else if (this.small.count > this.big.count + 1) {
    this.big.add(this.small.poll())
  }
}

/**
 * @return {double}
 * Return median of current data stream
 */
MedianFinder.prototype.findMedian = function () {
  if (this.small.count === this.big.count) {
    return (this.small.peek() + this.big.peek()) / 2
  } else return this.small.peek()
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var mf = new MedianFinder();
 * mf.addNum(1);
 * mf.findMedian();
 */

var mf = new MedianFinder()
mf.addNum(-1)
mf.addNum(-2)

console.log(mf.findMedian(), -1.5)
