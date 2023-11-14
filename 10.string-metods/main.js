// -------------------------------------------- TASK 1 --------------------------------------------

const text = "Java is awesome. Java is fun.";
console.log(text.replaceAll("Java", "Javascript"));
// text dəyişəndə Java sözünün əvəzinə Javascript yazdırın
// ====>> JavaScript is awesome. Javascript is fun.

// -------------------------------------------- TASK 2 --------------------------------------------

function mixUp(a, b) {
  console.log(b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2));
  //console.log(b.slice(0,2));
  //console.log(a,b);
}

// mixUp adlı function yaradın. function 2 parametr qəbul edir. Ən sonda aşağıdakı kimi
// nəticə çıxardın.

//console.log(mixUp("val", "pur")); //'pul var'

//console.log(mixUp("donce", "gevlet")); //'gence dovlet'

// -------------------------------------------- TASK 3 --------------------------------------------

// function verbing(word) {
//   if (word.length < 3) {
//     return word;
//   } else if (word.endsWith("ing") === "ing") {
//     return word + "ly";
//   }
//   else{
//     return word + "ing"
//   }
// }

// verbing adlı function yaradın. Bu function bir parametr(feil) qəbul edir. Bu feil əgər 3 hərfdən
// kiçikdirsə sözün özün return edin. Əgər sonu "ing" ilə bitirsə sonuna "ly" əlavə edin. Digər
// hallarda sözün sonuna "ing" əlaavə edin.

//console.log(verbing('go')); // go
//console.log(verbing('swim')); //swiming
//console.log(verbing('swiming')); //swimingly

// -------------------------------------------- TASK 4 --------------------------------------------

// Sözün palindrom olub olmadığını yoxlayın.

function isPalindrome(string) {
  let result = string.split("").reverse().join("");

  return string === result ? "polidromduur" : "polidrom deyil";
}
console.log(isPalindrome("hello"));
console.log(isPalindrome("ollo"));
// -------------------------------------------- TASK 5 --------------------------------------------

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const length = 4;

function splitIntoChunk(arr, len) {
  return [[...arr.slice(0, len)], [...arr.slice(4)]];
}

console.log(splitIntoChunk(array, 4)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]

// -------------------------------------------- TASK 6 --------------------------------------------

// console.log(longestWord("Hello word hi programmers"));

// Ən uzun sözü tapın.  ======>> programmers

// -------------------------------------------- TASK 7 --------------------------------------------

// function getFileExtension(filename){

// }

// getFileExtension adlı function yaradın. Verilmiş fayl adının uzantısını göstərən kod yazın.

// console.log(getFileExtension('module.js')) //js
// console.log(getFileExtension('module.txt')) //txt
