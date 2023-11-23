let ulElem = document.querySelector("ul");
let addBtn = document.querySelector(".add");
let input = document.querySelector("#input");
addBtn.addEventListener("click", function () {
  if (input.value != "") {
    let liElem = document.createElement("li");

    let spanElem = document.createElement("span");

    let buttonElem = document.createElement("button");
    spanElem.innerText = input.value;
    buttonElem.innerText = "Delete";
    ulElem.append(liElem);
    liElem.append(spanElem, buttonElem);
    buttonElem.addEventListener("click", function () {
      this.parentElement.remove();
    });
  } else {
    alert("Empty")
  }
  input.value = "";
});
