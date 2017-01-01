module.exports = [
  {
    input: [
      ['.87654321',
        '2........',
        '3........',
        '4........',
        '5........',
        '6........',
        '7........',
        '8........',
        '9........'].map(line => Array.from(line))
    ],
    ans: true
  },
  {
    input: [
      ['.87654321',
        '2........',
        '3........',
        '4........',
        '5........',
        '6........',
        '7........',
        '8........',
        '2........'].map(line => Array.from(line))
    ],
    ans: false
  }
]