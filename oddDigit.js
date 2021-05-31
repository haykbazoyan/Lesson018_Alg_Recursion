function isDigitOdd(number) {
  if (number === 0) {
    return true;
  }
  let current = number % 10;
  if (current % 2 === 0) {
    return false;
  }

  return isDigitOdd((number - (number % 10)) / 10);
}

console.log(isDigitOdd(1357));
