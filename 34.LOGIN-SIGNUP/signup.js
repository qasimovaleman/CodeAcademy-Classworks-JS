let form = document.querySelector("form");
let username = document.querySelector(".username");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
//
let userArr = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let userObj = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  if (email.value.length > 1 && password.value.length > 4) {
    userArr.push(userObj);
    localStorage.setItem("user", JSON.stringify(userObj));
    window.location.href = "login.html";
  } else {
    alert("email or password is incorrect");
  }
});
