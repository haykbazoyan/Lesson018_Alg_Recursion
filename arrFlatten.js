function flattenArr(array) {
  function inner(arr) {
    return arr.reduce(
      (acc, el) => acc.concat(Array.isArray(el) ? inner(el) : el),
      []
    );
  }
  return inner(array);
}

let arr1 = [1, [3, 4, [1, 2]], 10];
let arr2 = [14, [1, [[[3, []]], 1], 0]];

console.log(flattenArr(arr1));
console.log(flattenArr(arr2));
