//-------------------------------------------------  TASK 1  -------------------------------------------------
const number = [1, 2, 3, 4, 5, 6, 7, 8];
let tekeded = number.filter((item) => {
  return item % 2 === 1;
});
console.log(tekeded);
//Tək ədədləri filter methodu vasitəsilə yeni bir dəyişkənə mənimsət:
//====>   [1, 3, 5, 7]

//----------- part II

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let newArray = array.filter((elem) => {
  return 1 < elem && elem < 10;
});
console.log(newArray);
//1 və 10 aralığındakı rəqəmləri consol-a çıxart
//====>   [1,2,3,4,5,6,7,8,9,10]

//-------------------------------------------------  TASK 2  -------------------------------------------------

const users = [
  {
    first_name: "Mike",
    last_name: "Sheridan",
  },
  {
    first_name: "Tim",
    last_name: "Lee",
  },
  {
    first_name: "John",
    last_name: "Carte",
  },
];
let fullName = users.map((elem, i) => {
  return `${elem.first_name} ${elem.last_name}`;
});
console.log(fullName);
//Verilmiş array-də objectlərin first_name və last_name dəyişkənin aşağıdaki kimi göstərin.

//=====> ["Mike Sheridan", "Tim Lee", "John Carte"]

//-------------------------------------------------  TASK 3  -------------------------------------------------

const persons = [
  { name: "Akif", age: 25 },
  { name: "Aysu", age: 32 },
  { name: "Ali", age: 35 },
];
let age = persons.find((elem, index) => {
  return elem.age > 30;
});
let personIndex = persons.findIndex((index) => index.age > 30);
console.log(personIndex);
//find metodu vasitəsilə array-in içindəki, yaşı 30-dan yuxarı olan ilk şəxsi "firstPerson" adlı dəyişkənə
//mənimsədib console-a çıxardın. ====> { name: 'Aysu', age: 32 }

//------------------------------ part II

//tapdığınız objectin index-ni də ikinci bir console-da çıxardın.(metod ilə)

//-------------------------------------------------  TASK 4  -------------------------------------------------

//const array1 = [1, 4, 9, 16];

//Verilmiş array-in hər bir elementini qüvvətə yüksəldin.   ======> [ 1, 16, 81, 256 ]
