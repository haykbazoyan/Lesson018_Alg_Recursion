function getFactorialOfArray(array) {
  let res = 0;
  function inner(array) {
    if (array.length === 0) {
      return array;
    }
    res += array.shift();
    inner(array);
    return res;
  }

  res = inner(array);

  if (res === 0 || res === 1) {
    return 1;
  }

  function factorial(num) {
    if (num === 1) {
      return 1;
    }
    return num * factorial(num - 1);
  }

  return factorial(res);
}

let arr = [2, 3];

console.log(getFactorialOfArray(arr));
