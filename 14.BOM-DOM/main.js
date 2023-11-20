//--------------------------------------------------------- TASK 1 ---------------------------------------------------------

// Bir dəyişən təyin edin və dəyəri 1 olsun. 1 saniyədən bir consol-da yaratdığınız dəyişənin
// dəyərini +1 artırın. 4 saniyə
// sonra intervalı sonlandırın.
// let count = 1;
// let interval = setInterval(() => {
//   console.log(count++);
// },1000);
// setTimeout(() => {
//   clearInterval(interval);
// }, 4000);
// --------------------------------------------------------- TASK 2 ---------------------------------------------------------

// HTML-də button və text üçün tag yazın. button-a click ettikdə text-içindəki yazı dəyişsin.

// let change = document.querySelector(".text");
// //let btn = document.querySelector(".text");
// let btn = addEventListener("click", function () {
//   change.innerText = "I am Hacker";
//   change.style.color = "yellow";
//   change.style.fontSize = "2rem";
// });
// --------------------------------------------------------- TASK 3 ---------------------------------------------------------

// HTML-də birdən çox eyni adda class sahib element yaradın.
// Hər bir elementi loop ilə tək-tək console-a çıxardın.
// let allText = document.querySelectorAll(".text");
// console.log(allText);
// allText.forEach((el) => {
//   console.log(el.innerText);
// });
// --------------------------------------------------------- TASK 4 ---------------------------------------------------------

// let str = "developer";
// let index = 1;

// let interval = setInterval(() => {
//   if (index <= str.length) {
//     str = str.slice(0, index).toLocaleUpperCase() + str.slice(index);
//     index++;
//     console.log(str);
//   } else {
//     clearInterval(interval);
//   }
// }, 1000);

// Verilmiş string-in hər bir hərfini 1 saniyədən bir böyük hərf edin.

// Developer
// DEveloper
// DEVEloper
// DEVELOper
// DEVELOPer
// DEVELOPEr
// DEVELOPER

// --------------------------------------------------------- TASK 5 ---------------------------------------------------------

// HTML-də button yaradın və ona click ettikdə body-nin background color-u dəyişsin.
let colorBtn=document.querySelector(".click")
let body=document.getElementById("body")

let colors=["blue","red","green",]
