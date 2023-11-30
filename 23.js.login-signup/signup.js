let body = document.querySelector("body");

let form = document.createElement("form");
let h1Elem = document.createElement("h1");
//

h1Elem.innerText = "Signup";

//
let emailInput = document.createElement("input");
emailInput.placeholder = "email";
//
let createPassword = document.createElement("input");
createPassword.placeholder = "Create password";
//
let confirmPassword = document.createElement("input");
confirmPassword.placeholder = "Confirm password";
//
let signupBtn = document.createElement("button");
signupBtn.innerText = "Signup";
signupBtn.style.backgroundColor = "blue";
signupBtn.style.color = "white";
signupBtn.style.border = "none";
signupBtn.style.type = "submit";
form.append(emailInput, createPassword, confirmPassword, signupBtn);

body.append(h1Elem, form);
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.width = "30%";
form.style.rowGap = "1rem";

let userArr = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let userObj = {
    email: emailInput.value,
    password: createPassword.value,
    confirm:confirmPassword.value
  };

  if (
    emailInput.value.length > 0 &&
    createPassword.value === confirmPassword.value
  ) {
    userArr.push(userObj);
    localStorage.setItem("signUpArr", JSON.stringify(userArr));

    window.location.href = "login.html";
  } else {
    alert("email or password is incorrect");
  }
});
