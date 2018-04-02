const fib = (n) => {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

const fibCounterIter = (a, b, count) => {
  if (count === 0) {
    return b
  }
  return fibCounterIter(a + b, a, --count)
}
const fibIter = (n) => fibCounterIter(1, 0, n)

module.exports.fib = fib;
module.exports.fibIter = fibIter;