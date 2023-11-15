//TASK-1
let person = {
  firstName: "leman",
  lastName: "gasimova",
  age: 20,
  skills: ["yatmaq", "yemek"],
  university: "gdu",
};
person.city = "ganja";
console.log(person);
person["phone number"] = 9940971537;
console.log(person);
//employe obyektinin sadece keylerini console'a cixarin
console.log(Object.keys(person));
//employees obyektinin sadece valuelerini console'a cixarin
console.log(Object.values(person));
//
console.log(Object.entries(person));
//object'in age key'ini silin.
delete person.age;
console.log(person);
//
// en uzun string value'ni console'a cixarin
let newArray = Object.values(person);
console.log(newArray);
let longName = newArray[0];

newArray.forEach((elem) => {
  if (elem.length > longName.length) {
    longName = elem;
  }
});
console.log(longName);

// ---------------------------------------------------------- TASK 2 ----------------------------------------------------------

var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    readingStatus: true,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    readingStatus: true,
  },
  {
    title: "Suzanne Collins",
    author: "Mockingjay: The Final Book",
    readingStatus: false,
  },
];

for (let i = 0; i < library.length; i++) {
  if (library[i].readingStatus == true) {
    console.log(`Already read ${library[i].title} by ${library[i].author}`);
  } else if (library[i].readingStatus == false) {
    console.log(
      `You stil need to read ${library[i].title} by ${library[i].author}`
    );
  }
}

// "library" adlı array yaradın. İçərisində title, author və readingStatus adlı key-ləri olan objectlər yaradın.
// Əgər readingStatus true olarsa console-a "Already read 'title' by author' Əgər false
// olarsa "You still need to read 'title' by author' yazsın

// Nəticə ====>>
// Already read 'The Road Ahead' by Bill Gates.
// Already read 'Walter Isaacson' by Steve Jobs.
// You still need to read 'Suzanne Collins' by Mockingjay: The Final Book.

// ---------------------------------------------------------- TASK 3 ----------------------------------------------------------

let employee = {
  name: "Alice",
  jobTitle: "Software Developer",
  salary: 75000,
  promote: function (p1, p2) {
    this.jobTitle = p1;
    console.log(p1);
    this.salary = p2;
    console.log(p2);
    // console.log(
    //   "Promotion:" +
    //     this.name +
    //     "is now" +
    //     "Senior" +
    //     this.jobTitle +
    //     "with a salary of" +
    //     this.salary
    // );
  },
};
console.log(`${employee.name} is now senior ${employee.jobTitle} with a salary of ${employee.salary}`);

// "employee" adlı object yaradın. Object-in name, jobTitle, salary və promote adında key-ləri var.
// promote bir anonim function-dır, 2 parametr qəbul edir. jobTitle-in value-ı ilk dəfə "Software Developer" salary isə 75000.
// Ən sonda employee.promote-a bir yeni vəzifə və yeni maaş göndərin.

// employee.promote('Senior Software Engineer', 90000);

// Nəticə: Promotion: Alice is now Senior Software Engineer with a salary of $90000

// ---------------------------------------------------------- TASK 4 ----------------------------------------------------------

// const name = {
//     firstName: 'Philip',
//     lastName: 'Fry'
// };

// const details = {
//     job: 'Delivery Boy',
//     employer: 'Planet Express'
// };

// Object methodu ilə character objecti təyin edib aşağıdakı kimi console-a çıxardın.

// console.log(character); ====>> // {firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}

// ---------------------------------------------------------- TASK 5 ----------------------------------------------------------

// ladder adlı object yaradın. step adında dəyəri 0-olan key yazın. Bundan əlava object-in 2 ayrı function-ı olsun. up və down.
// up function step-in dəyərin +1 artırsın. down isə -1 azaltsın.
