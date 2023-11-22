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
// const liArr = ["Ganja", "Baku", "Yevlakh", "Goranboy", "Shamkir"];
// let ulElem = document.querySelector(".list");
// ulElem.style.listStyle = "none";
// liArr.forEach((elem) => {
//   let liElem = document.createElement("li");
//   liElem.innerText = `${elem}`;
//   ulElem.append(liElem);
//   liElem.addEventListener("click", function () {
//     this.remove();
//   });
// });
//
//
//
//----------------------------------------------
// let startBtn = document.querySelector(".start");
// let stopBtn = document.querySelector(".stop");
// let result = document.querySelector(".counter");
// let incrementBtn = document.querySelector(".increment");
// let decrementBtn = document.querySelector(".decrement");
// let resetBtn = document.querySelector(".reset");
// startBtn.style.backgroundColor = "green";
// startBtn.style.padding = "15px";
// stopBtn.style.padding = "15px";
// startBtn.style.border = "none";
// stopBtn.style.border = "none";
// stopBtn.style.backgroundColor = "red";
// incrementBtn.style.backgroundColor = "blue";
// decrementBtn.style.backgroundColor = "blue";
// incrementBtn.style.padding = "10px";
// decrementBtn.style.padding = "10px";
// incrementBtn.style.border = "none";
// decrementBtn.style.border = "none";
// resetBtn.style.backgroundColor = "green";
// resetBtn.style.padding = "10px";
// resetBtn.style.border = "none";
// let count = 0;

//----------------------------------------------
// let countInterval;
// startBtn.addEventListener("click", function () {
//   countInterval = setInterval(() => {
//     count++;
//     result.innerText = count;
//   }, 500);
// });
//----------------------------------------------

//

//----------------------------------------------
// stopBtn.addEventListener("click", function () {
//   clearInterval(countInterval);
// });
//-----------------------------------------------

//------------------------------------------------
incrementBtn.addEventListener("click", function () {
  count++;
  result.innerText = count;
});
//-----------------------------------------
decrementBtn.addEventListener("click", function () {
  count--;
  result.innerText = count;
});
//------------------------------
resetBtn.addEventListener("click", function () {
  clearInterval(countInterval);
  count = 0;
  result.innerText = 0;
});
//------------------------------------------------

// startBtn.addEventListener("click", function () {
//   this.setAttribute("disabled", null);
//   stopBtn.removeAttribute("disabled");

//   countInterval = setInterval(() => {
//     count++;
//     result.innerText = count;
//   }, 100);
// });

// stopBtn.addEventListener("click", function () {
//   clearInterval(countInterval);
//   this.setAttribute("disabled", null);
//   startBtn.removeAttribute("disabled");
// });

// resetBtn.addEventListener("click", function () {
//   count = 0;
//   result.innerText = count;
//   clearInterval(countInterval);
//   startBtn.removeAttribute("disabled");
//   stopBtn.removeAttribute("disabled");
// });

//--------------------------------------
//let invalue = document.querySelector(".invalue");
// invalue.addEventListener("click", function () {
//   count += +ininput.value;
//   result.innerText = count;
// });
//let decrementBy = document.querySelector(".decrementBy");
// devalue.addEventListener("click", function () {
//   count -= +deinput.value;
//   result.innerText = count;
// });
