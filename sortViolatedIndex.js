function findViolatedIndex(array, index = 1) {
  if (array.length <= index) {
    return -1;
  }

  if (array[index - 1] > array[index]) {
    return index;
  }

  return findViolatedIndex(array, (index += 1));
}

let arr = [-9, -4, -4, 3, 12, 4, 5];
let arr1 = [2, 12, 15, 48, 64];

console.log(findViolatedIndex(arr));
console.log(findViolatedIndex(arr1));
