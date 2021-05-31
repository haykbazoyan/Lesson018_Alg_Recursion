let numAr = [-56, -9, 87, -23, 0, -105, 55, 1, 4];
let numAr2 = [45, -9, 15, 5, -78];
let numAr3 = [-45, -9, -15, -5, -78];
let numAr4 = [];

function minimalPositiveNum(numberArr) {
  if (numberArr.length === 0) {
    return -1;
  }
  if (numberArr.length === 1 && numberArr[0] < 0) {
    return -1;
  }

  if (numberArr.length === 1) {
    return numberArr[0];
  }

  if (
    (numberArr[1] > numberArr[0] && numberArr[0] >= 0) ||
    (numberArr[1] < numberArr[0] && numberArr[1] < 0)
  ) {
    numberArr[1] = numberArr[0];
  }
  numberArr.shift();
  return minimalPositiveNum(numberArr);
}

console.log(minimalPositiveNum(numAr));
console.log(minimalPositiveNum(numAr2));
console.log(minimalPositiveNum(numAr3));
console.log(minimalPositiveNum(numAr4));
