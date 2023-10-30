//TASK1
//PART1
let firstName = "Leman";
let lastName = "Gasimova";
let fullName = firstName + " " + lastName;
console.log(fullName);

//PART2
let country = "Azerbaijan";
let age = "19";
let job = "Developer";

let personalinfo =
  firstName +
  " " +
  lastName +
  " .I am a " +
  job +
  ".I live in " +
  country +
  ". I am " +
  age +
  " years ";
console.log(personalinfo);
//TASK2
let length = 16; //number
console.log(typeof length);
let Color = "Brown"; //string
console.log(typeof Color);
let float = 12.5; //number
console.log(typeof float);
let like = true; //boolean
console.log(typeof like);
let x = {
  firstName: "Nick",
  color: "Red",
}; //object
console.log(typeof x);
//TASK3

let distance = 8600;
let speed = 120;
let duration = (distance / speed) * 60;
console.log("The car will arriwe in Chine in" + duration + " minutes ");
//TASK4

let year = 2023;
let birth = 2004;
let old = year - birth;
console.log("I will be " + old + " or " + (old+1));
