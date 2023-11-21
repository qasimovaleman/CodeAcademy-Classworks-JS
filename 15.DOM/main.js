// let clickBtn = document.querySelector(".add");
// let parentEl = clickBtn.parentElement;
// console.log(parentEl);
// clickBtn.addEventListener("click", function () {
//   parentEl.style.backgroundColor = "green";
//   parentEl.style.width = "150px";
//   parentEl.style.height = "150px";
//   parentEl.style.position = "relative";
//   clickBtn.style.position = "absolute";
//   clickBtn.style.bottom = "10px";
//   clickBtn.style.right = "10px";
// });
//--------------------
// let lightBtn = document.querySelector(".light");
// let parentEl = lightBtn.parentElement;
// lightBtn.addEventListener("click", function () {
//     parentEl.classList.toggle("bg-red")
// });
//-----------------------------------------
const liArr = ["Ganja", "Baku", "Yevlakh", "Goranboy", "Shamkir"];
let ulElem = document.querySelector(".list");
ulElem.style.listStyle = "none";
liArr.forEach((elem) => {
  let liElem = document.createElement("li");
  liElem.innerText = `${elem}`;
  ulElem.append(liElem);
  liElem.addEventListener("click", function () {
    this.remove();
  });
});
