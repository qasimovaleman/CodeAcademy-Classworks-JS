// const employees = [
//   { name: "Jamil", salary: 1500, department: "IT" },
//   { name: "Jale", salary: 5000, department: "HR" },
//   { name: "Bayram", salary: 24000, department: "IT" },
//   { name: "Sahil", salary: 6000, department: "HR" },
//   { name: "Maryam", salary: 18000, department: "IT" },
//   { name: "Elnara", salary: 20000, department: "HR" },
//   { name: "Davud", salary: 14000, department: "IT" },
// ];

//#ortalama maaşı 20000-dən çox olan departamentləri çapa verən program tərtib edin.
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].salary > 20000) {
//     console.log(employees[i].department);
//   }
// }

//#ortalama maaşı 10000-dən çox olan və departamenti "IT" olanları çapa verən program tərtib edin.
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].salary > 10000 && employees[i].department === "IT") {
//     console.log(employees[i]);
//   }
// }
//#sadecə department "HR" olanları yeni array'a yığıb, həmin arrayı console edin
// let newArray = [];
// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].department === "HR") {
//     newArray.push(employees[i]);
//     console.log(newArray);
//   }
// }
//-------------------
//TASK 2

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   city: "Ganja",
//   website: "code.edu.az",
//   languageInfo: {
//     eng: "Advance",
//     aze: "Fluenty",
//     rus: "Intermediate",
//   },
// };

//person adlı object-dən firstName-i, languageInfo-dan eng və rus property-ni destructing edin, əlavə olaraq
//personda yerdə qalan bütün property-ləri otherInfo adı altında rest operatoru ilə bir dəyişənə çıxarın.
// const {
//   firstName,
//   languageInfo: { eng, rus },
//   ...otherInfo
// } = person;
// console.log(eng); // "Advance"
// console.log(otherInfo); // {lastName: 'Doe', city: 'Ganja', website: 'code.edu.az'}

// -------------------------

// TASK 3

const person = {
  firstName: "Michael",
  lastName: "Pam",
  age: 26,
  city: "Poland",
};

// 1. person object-nin sadəcə key-lərini console-a çıxardın.
console.log(Object.keys(person));
// 2. person object-nin sadəcə value-lərini console-a çıxardın.
console.log(Object.values(person));
// 3. Aşağıdakı kimi console-a çıxardın.
//     [firstName: 'Michael']
//     [lastName: 'Pam']
//     [age:26]
//     [city: 'Poland']
console.log(Object.entries(person));
// 4. object-in age propertysini silin.
delete person.age;
console.log(person);
// 5. Ən uzun string value-nu console-a çıxardın.
console.log(Object.values(person).sort((a, b) => a.length - b.length)[2]);
// ------------------------------

// TASK 4

const text = "Java is awesome. Java is fun.";
newText = text.replaceAll("Java", "Javascript");
console.log(newText);
// text dəyişəndə Java sözünün əvəzinə Javascript yazdırın

// ====>> JavaScript is awesome. Javascript is fun.

// ---------------------

// TASK 5

// Sözün palindrom olub olmadığını yoxlayın.

function isPalindrome(string) {
  let result = string.split("").reverse().join("");
  return string === result ? "polidromdur" : "polidrom deyil";
}

console.log(isPalindrome("hello"));

// ------------------

// TASK 6

console.log(
("Hello word hi programmers").split(" ").sort(
    (a, b) => b.length - a.length
  )[0]
);

// Ən uzun sözü tapın.  ======>> programmers

// ------------------

// TASK 7

const persons = [
  { name: "Akif", age: 25 },
  { name: "Aysu", age: 32 },
  { name: "Ali", age: 35 },
];

// let firstPerson = persons.find((elem, index) => {
//   return elem.age > 30;
// });
// console.log(firstPerson);

// find metodu vasitəsilə array-in içindəki, yaşı 30-dan yuxarı olan ilk şəxsi "firstPerson" adlı dəyişkənə
// mənimsədib console-a çıxardın. ====> { name: 'Aysu', age: 32 }

// ------------------------------ part II

// tapdığınız objectin index-ni də ikinci bir console-da çıxardın.(metod ilə)
// let firstPerson = persons.findIndex((elem, index) => {
//   return elem.age > 30;
// });
// console.log(firstPerson);
