// рекурсивный процесс
const factorial = (n) => {
     if (n === 0) {
          return 1;
     }
     return n * factorial(n - 1);
}

// итеративный
const factorialIter = (n) => {
     const iter = (current, acc) => {
          if (current === 0) {
               return acc;
          }
          return iter(current - 1, acc * current);
     }
     return iter(n, 1);
} 

module.exports.factorial = factorial;
module.exports.factorialIter = factorialIter;