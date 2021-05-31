function myShift(array, index = 1) {
  if (array.length < index) {
    array.pop();
    return array;
  }

  array[index - 1] = array[index];

  return myShift(array, (index += 1));
}

let arr1 = [6, 78, "n", 0, 1];
let arr2 = [5];
let arr3 = [];

console.log(myShift(arr1));
console.log(myShift(arr2));
console.log(myShift(arr3));
