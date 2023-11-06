let newArray = [];
let ItCompanles = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(ItCompanles.length);
console.log(ItCompanles);
console.log(ItCompanles[0]);
console.log(ItCompanles[ItCompanles.length - 1]);

console.log(ItCompanles[parseInt(ItCompanles.length / 2)]);
let arr = [];
for (let i = 0; i < ItCompanles.length; i++) {
  arr.push(ItCompanles[i].toLocaleUpperCase());
}
console.log(arr);
//console.log(ItCompanles.toString());
console.log(`${ItCompanles.toString()} Boyuk IT wirketleridir`);
