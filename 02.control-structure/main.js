//TASK-1
// let hava = 6;
// if (hava > 22) {
//   console.log(`${hava} Nazik geyin`);
// } else if (hava > 15) {
//   console.log(`${hava} Pencek geyin`);
// } else {
//   console.log(`${hava} Qalin geyin`);
// }

//TASK-2
// let letter = "a";
// if (letter == "a" || letter=="i" || letter == "o") {
//   console.log(`${letter} sait herfdir`);
// } else if (letter == "b") {
//   console.log(`${letter} samit herfdir`);
// }

// TASK-3
// let a = 25;
// let b = 52;
// let c = 88;
// if (a > b && a > c) {
//   console.log(`${a} is greate`);
// } else if (b > a && b > c) {
//   console.log(`${b}  is greate`);
// } else if (c > a && c > b) {
//   console.log(`${c} is greate`);
// }
//TASK-4
// let grade = 73;
// if (grade>90) {
//     console.log(`${grade} A`);

// } else if (grade>80) {
//     console.log (`${grade} B`)
// }  else if (grade>70) {
//     console.log (`${grade} C`)
// }  else if (grade>60) {
//     console.log (`${grade} D`)
// }  else if (grade>50) {
//     console.log (`${grade} F`)
// }
// TASK-5
// let userName = "Fidan";
// console.log(userName.length);
// if (userName.length < 5) {
//   console.log(`Salam ${userName} .Qisa adiniz var`);
// } else if(userName.length <10) {
//     console.log(`Salam ${userName} .Orta uzunluqlu adiniz var`);
// } else if (userName.length >10) {
//     console.log(`Salam ${userName} . Adiniz cox uzundur`);
// }

// TASK-6
let a = 3;
let b = 1;
let c = 4;
if (a + b > a + c && a + b > b + c) {
  console.log(`Big sum result ${a} and ${b} = ${a + b}`);
} else if (a + c >b+c && a+c > a + b) {
  console.log(`Big sum result ${a} and ${c} = ${a + c}`);
} else {
    console.log(`Big sum result ${b} and ${c} = ${b + c}`);
}
