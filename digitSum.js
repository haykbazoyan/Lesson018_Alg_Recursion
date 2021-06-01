function sumAllDigits(number) {
  let res = 0;
  function inner(number) {
    if (number < 10) {
      return number;
    }
    return (number % 10) + sumAllDigits((number - (number % 10)) / 10);
  }
  res = inner(number);

  if (res % 10 === 0) {
    return res / 10;
  }

  if (res > 10) {
    res = inner(res);
  }

  return res;
}

let num = 999999999999;
console.log(sumAllDigits(num));
