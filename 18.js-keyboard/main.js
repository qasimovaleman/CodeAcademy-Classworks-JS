const container = document.querySelector(".container");
const listOne = document.querySelector(".list.one");
const listTwo = document.querySelector(".list.two");
const words = document.querySelector(".words");
const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", function (e) {
  if (words.innerText.length > 60) {
    words.innerText = "";
  }
  if (e.code == "Space") {
    words.innerText += "\t";
  }
  keys.forEach((item, i) => {
    console.log(item.innerText == e.key);
    if (item.innerText == e.key) {
      item.style.opacity = "0";
      item.style.backgroundColor = "red";
      item.style.transform = `scale(1.2)`;
      item.style.transition = `0.2s`;
      words.innerText += `${item.innerText}`;
    }
  });
});

window.addEventListener("keyup", function (e) {
  if (e.code == "Space") {
    //words.innerText += `\t`;
   // words.innerText += `${item.innerText}`;
  }
  keys.forEach((item, i) => {
    console.log(item.innerText == e.key);

    if (item.innerText == e.key) {
      item.style.backgroundColor = "darkcyan";
      //words.innerText += `${item.innerText}`;
      item.style.opacity = "1";
      item.style.transform = `scale(1)`;
      item.style.transition = `0.2s`;
    }
  });
});
