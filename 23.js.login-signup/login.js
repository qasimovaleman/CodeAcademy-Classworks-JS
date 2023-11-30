let body = document.querySelector("body");

let form = document.createElement("form");
let h1Elem = document.createElement("h1");
//

h1Elem.innerText = "Login";

//
let emailInput = document.createElement("input");
emailInput.placeholder = "email";
//
let password = document.createElement("input");
password.placeholder = " password";

let loginBtn = document.createElement("button");
loginBtn.innerText = "Login";
loginBtn.style.backgroundColor = "blue";
loginBtn.style.color = "white";
loginBtn.style.border = "none";
loginBtn.style.type = "submit";
form.append(emailInput, password, loginBtn);
body.append(h1Elem, form);
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.width = "30%";
form.style.rowGap = "1rem";


form.addEventListener("submit", function (e) {
  e.preventDefault();
  let allUsers = JSON.parse(localStorage.getItem("signUpArr"));
  let bool = allUsers.some(
    (item) =>
      item.password === password.value && item.email === emailInput.value
  );

  if (emailInput.value !== "" || password.value !== "") {
    if (bool) {
      window.location = "home.html";
    } else {
      alert("Username or email is wrong");
    }
  } else {
    alert("fields are empty!");
  }
});
