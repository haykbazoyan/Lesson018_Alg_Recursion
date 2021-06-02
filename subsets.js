// this code doesn't work
function sumSubsets(arr) {
  let arrLength = arr.length;
  let iter = 0;
  function inner(array, index) {
    index = iter++;
    if (res.length === Math.pow(2, arrLength)) {
      return res;
    }

    return res.push(array[index] + inner(array));
  }
  return inner(res);
}
let arr = [2, 4, 5];
console.log(sumSubsets(arr));

// [2, 4, 5]  ->  0, 2, 4, 5, 6, 7, 9, 11

// code without recursion

function sumSub(arr) {
  let arrLength = arr.length;
  let lastSum = 0;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 1 + i; j < arrLength; j++) {
      arr.push(arr[i] + arr[j]);
    }
    lastSum += arr[i];
  }

  arr.push(lastSum);
  arr.unshift(0);

  return arr;
}

console.log(sumSub([2, 4, 5]));
