module.exports = [
  {
    input: ['/a/b/'],
    ans: '/a/b'
  },
  {
    input: ['a/../b/../../././../c'],
    ans: '/c'
  },
  {
    input: ['/'],
    ans: '/'
  }
]