let form = document.querySelector("#form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let address = document.querySelector("#address");

let data = JSON.parse(localStorage.getItem("userObj")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let userInfo = {
    id: Date.now(),
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
  };

  data.push(userInfo);
  localStorage.setItem("userObj", JSON.stringify(data));
  firstName.value = "";
  lastName.value = "";
});
// console.log(data);
