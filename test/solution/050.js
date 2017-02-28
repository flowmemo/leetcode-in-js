module.exports = [
  {
    input: [1, 1 << 31],
    ans: 1
  },
  {
    input: [0.99, ~(1 << 31)],
    ans: 0
  }
]
