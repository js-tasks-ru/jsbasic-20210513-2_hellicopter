let n = 5;
generalResult = factorial(n);
console.log(generalResult)
function factorial(n) {
  let counter = n;
  let result = 1;
  while (counter != 0) {
    console.log(result);
    console.log(counter);
    result = result * counter;
    counter--;
  }
  return result;
}