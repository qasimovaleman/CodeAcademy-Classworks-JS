//console.log(findFirstNotRepeatedChar('abacddbecz'));

//findFirstNotRepeatedChar adlı bir function yaradın. Bu function göndərdiyiniz string-in ilk təkrarlanmayan
//hərfini qaytarsın. Nəticə =====>> "e"

function findFirstNotRepeatedChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      result = str[i];
      break;
    }
  }
  return result;
}

console.log(findFirstNotRepeatedChar("aabcdac"));

// ----------------------------------------------------- TASK 2 -----------------------------------------------------

// console.log(charCount('w3rescource.com', 'c'));

// charCount adlı function yaradın. Bu function 2 ədəd argument qəbul edir.
// 2-ci göndərdiyiniz hərf 1-cinin içərisində
// neçə dəfə təkrarlanıbsa onun sayısını göstərin.

// Nəticə: 3
//Function

// function charCount(arg1, arg2) {
//   let count = 0;
//   for (let i = 0; i < arg1.length; i++) {
//     if (arg1[i].toLocaleLowerCase() === arg2.toLocaleLowerCase() {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(charCount("w3resCCCCCCCcource.com", "c"));
// ----------------------------------------------------- TASK 3 -----------------------------------------------------

// console.log(makeId(8));

// makeId adlı function yaradın. Bu function qəbul etdiyi rəqəm uzunluğunda random ID verməlidir.
// Məsələn =====>> 4SGqCfrz

function makeId(length) {
  let text = "";
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += charList.charAt(Math.floor(Math.random() * charList.length));
  }

  return text;
}
console.log(makeId(10));
// ----------------------------------------------------- TASK 4 -----------------------------------------------------

// console.log(uniqueChar("abccddee"));  ====>> abcde

// ----------------------------------------------------- TASK 5 -----------------------------------------------------

// console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8]));

// Nəticə: =====>> [4, 5, 8, 10, 12]

// ----------------------------------------------------- TASK 6 -----------------------------------------------------

// var a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ];

// Nəticə: =====>>
// row 0
//  1
//  2
//  1
//  24
// row 1
//  8
//  11
//  9
//  4
// row 2
//  7
//  0
//  7
//  27
// row 3
//  7
//  4
//  28
//  14
// row 4
//  3
//  10
//  26
//  7
