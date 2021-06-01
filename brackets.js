function addBrackets(string) {
  if (string.length === 1 || string.length === 2) {
    return string;
  }
  // -- IF STRING LENGTH IS EVEN --
  if (string.length % 2 !== 0) {
    let iter = 0;
    let res = "";
    function innerEven(string, strLength = (string.length - 1) / 2) {
      if (iter === string.length - 1) {
        return res;
      }

      if (iter >= strLength) {
        res += string[iter] + ")";
      } else {
        res += string[iter] + "(";
      }

      iter++;
      return innerEven(string);
    }
    res = innerEven(string) + string[string.length - 1];
  }

  // -- IF STRING LENGTH IS ODD --
  if (string.length % 2 === 0) {
    let iter = 0;
    let res = "";
    function innerEven(string, strLength = (string.length - 2) / 2) {
      if (iter === string.length - 1) {
        return res;
      }

      if (iter >= strLength) {
        if (iter === strLength) {
          res += string[iter];
        } else {
          res += string[iter] + ")";
        }
      } else {
        res += string[iter] + "(";
      }

      iter++;
      return innerEven(string);
    }
    res = innerEven(string) + string[string.length - 1];
  }

  return innerEven(string);
}

let string = "example";
console.log(addBrackets(string));

let string1 = "exasmple";
console.log(addBrackets(string1));

let letters = "LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO";
console.log(addBrackets(letters));

//  e ( x ( a ( m ( a ) s ) p ) l ) e      (length-1) / 2
// length 9 -- brackets 4/4

//  e ( x ( a ( m ) p ) l ) e
// length 7 -- brackets 3/3

// a ( s ( d ( fg ) h ) j ) k
// length 8 -- brackets 3/3

// length n -- if even  length-1/2 / length-1/2
// length n -- if odd  length-2/2 / length-2/2

// -- FUNCTION WITHOUT RECURSION --

// function add(str) {
//   let res = "";

//   if (string.length === 1 || string.length === 2) {
//     return string;
//   }

//   if (str.length % 2 !== 0) {
//     for (let index = 1; index <= (str.length - 1) / 2; index++) {
//       res += str[index - 1] + "(";
//     }
//     for (let index = (str.length - 1) / 2 + 1; index < str.length; index++) {
//       res += str[index - 1] + ")";
//     }
//     res += str[str.length - 1];
//   } else {
//     for (let index = 1; index <= (str.length - 2) / 2; index++) {
//       res += str[index - 1] + "(";
//     }
//     res += str[str.length / 2 - 1];
//     for (let index = (str.length - 2) / 2 + 2; index < str.length; index++) {
//       res += str[index - 1] + ")";
//     }
//     res += str[str.length - 1];
//   }

//   return res;
// }

// let string = "example";
// console.log(add(string));

// let string1 = "exasmple";
// console.log("str2:: ", add(string1));
