function rotateArr(array, index) {
  if (index === array.length) {
    return array;
  }

  array.unshift(array[array.length - 1]);
  array.pop();

  return rotateArr(array, (index += 1));
}

let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

//console.log(rotateArr(arr, 3));
console.log(rotateArr(arr, -2));
