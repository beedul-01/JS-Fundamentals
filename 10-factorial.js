
function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const arg = 10;
const num = parseInt(arg);

console.log(factorial(num));
