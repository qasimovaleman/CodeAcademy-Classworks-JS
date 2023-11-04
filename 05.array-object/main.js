//-----------------------TASK-1

// const numbers = [12, 45, 6, 78, 34, 99, 23];
// console.log("en kicik reqem", Math.min(...numbers));
// console.log("en boyuk reqem",Math.max(...numbers));

//------------------------TASK-2
// let sum = 0;
// let numbers = [12, 45, 6, 78, 34, 99, 23];

// for (let i = 0; i < numbers.length; i++)
// {
//   sum += numbers[i];
// }
// console.log("sum:", sum);
//-------------------------TASK-3
// const elements = [1, 2, 3, 4, 5];
// elements[1] = 3;
// elements[2] = 2;
// console.log(elements);
//-------------------------TASK-4
// const numbers = [12, -5, 6, -3, 34, -1, 23];
// const array = numbers.filter(function (positifElement) {
//   return positifElement > 0;
// });

// console.log(array);
//---------------------------TASK-5
//Verilmis array-da index-leri n qeder tekrar ederek consol-a cixardin-[1,1,1,2,2,2,3,3,3,4,4,4];
// const originalArray = [1, 2, 3, 4];
// const n = 3;
// const repeatedArray = [];
// for (let i = 0; i < originalArray.length; i++) {
//   for (let a = 0; a < n; a++) repeatedArray.push(originalArray[i]);
// }
// console.log(repeatedArray);
//---------------------------TASK-6
//Verilmis arrayda tek ve cut ededleri ayri-ayri consola cixarin

// const numbers = [12, 45, 6, 78, 34, 99, 23];
// const tek = numbers.filter(function (tekElement) {
//   return tekElement % 2 === 1;
// });
// console.log(tek);
// const cut = numbers.filter(function (cutElement) {
//   return cutElement % 2 === 0;
// });
// console.log(cut);

//----------------------------TASK-7
//Verilmis arrayda ededleri ters cevirib consolede cixardin
// const originalArray = [1, 2, 3, 4, 5];
// console.log(originalArray.reverse(1, 2, 3, 4, 5));

//--------------------------OPTIONAL-TASK
//--------------------------TASK-1
//Verilmis arrayin tek elementlerinin indexini capa veren proqram tertib edin

let arr = [3, 8, 2, 5, 4, 10, 7, 6];

for (let i = 2; i < arr.length; i = i + 1) {
  if (i % 2 === 1) {
    console.log([i]);
  }
}

//--------------------------TASK-2
//Verilmis arrayin tek indexli elementlerini capa veren proqram yazin
// let arr=[3, 8, 2, 5, 4, 10, 7, 6]
// let tekElementIndex = {}
//   for(let i =1;i<arr.length;i++){
//     if(arr % 2 === 1){

//     }
//   }
//--------------------------TASK-3
//Verilmis arrayin cut elementlerinin max elementini capa veren proqram tertib edin.

// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let max = arr[4];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log("max:", max);
//------------------------TASK-4
//Verilmis ededin arrayda olub olmadigini teyin eden proqram yazin
let myArray = [1,2,3,4,5];
let num  = 10;
if(myArray.includes(num)){
  console.log("10 ededi arrayda movcuddur");
}else{
  console.log("10 ededi arrayda movcud deyil");
}
