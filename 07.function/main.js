function printFullName(firstName = "Lorem", lastname = "Ipsum") {
  let result = `I am ${firstName} ${lastname}`;
  return result;
}
console.log(printFullName("leman", "gasimova"));

// Task 2

function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function subtruct(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}

console.log(sum(3, 2));
console.log(multiply(3, 2));
console.log(subtruct(3, 2));
console.log(divide(3, 2));

//TASK-3
function calculator(num1, num2, operator) {
  let result;
  // * + - /
  if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    result = "bu operator deyil";
  }

  return result;
}

console.log(calculator(2, 3, "*"));
console.log(calculator(2, 3, "-"));
console.log(calculator(2, 3, "+"));
console.log(calculator(2, 3, "/"));
console.log(calculator(2, 3, "h"));
//TASK-4
const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];
function filterEmployees(arr) {
  //let result;
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].salary >= 60000) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(filterEmployees(employees));
//TASK-5
function reverseString(str) {
  let newstring = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstring += str[i];
  }
  return newstring;
}
console.log(reverseString("hello"));
//TASK-6
let str = "Lorem ipsum dolor,sit amet consectetur adipisicing elit.Sequi autt";
let count = 0;
function simvolSayi(string) {
  for (leti = o; i < string.length; i++) {
    if (string[i] == " ") {
      count++;
    }
  }
  return count;
}
console.log(simvolSayi(string));
