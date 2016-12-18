function Interval (start, end) {
  this.start = start
  this.end = end
}
module.exports = [
  {
    input: [[[1, 3], [2, 6], [8, 10], [15, 18]].map(data => new Interval(...data))],
    ans: [[1, 6], [8, 10], [15, 18]].map(data => new Interval(...data))
  }
]
