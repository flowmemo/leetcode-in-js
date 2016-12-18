function Interval (start, end) {
  this.start = start
  this.end = end
}
module.exports = [
  {
    input: [[[1, 3], [6, 9]].map(data => new Interval(...data)), new Interval(...[2, 5])],
    ans: [[1, 5], [6, 9]].map(data => new Interval(...data))
  },
  {
    input: [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]].map(data => new Interval(...data)), new Interval(...[4, 9])],
    ans: [[1, 2], [3, 10], [12, 16]].map(data => new Interval(...data))
  }
]
