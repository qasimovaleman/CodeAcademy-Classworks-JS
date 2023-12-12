let form = document.querySelector("form");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let ikon = document.querySelector(".ikon");
//
let userData = JSON.parse(localStorage.getItem("user")) || [];
//
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (userData.email === email.value && userData.password === password.value) {
    window.location.href = "home.html";
  }
});

ikon.addEventListener("click", function () {
  if (this.className === "fa-solid fa-eye") {
    password.type = "text";
    this.className = "fa-regular fa-eye";
  } else {
    password.type = "password";
    this.className = "fa-solid fa-eye";
  }
});
