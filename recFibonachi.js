function fibonacchi(number) {
  if (number === 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  }

  return fibonacchi(number - 1) + fibonacchi(number - 2);
}

console.log(fibonacchi(9));

// 0 1 1 2 3 5 8 13 21 34
// 0 1 2 3 4 5 6  7  8  9

function fib(num) {
  let res = 0;

  for (let index = 0; index < num; index++) {
    res += num - 1 + (num - 2);
  }

  return res;
}

console.log(fib(9));
