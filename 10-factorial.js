
function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const arg = 4;
const num = parseInt(arg);
const gar = 89;
const rag = 1000;
const rga = 'style';

console.log(factorial(num));
console.log(factorial(gar));
console.log(factorial(rag));
console.log(factorial(rga));

