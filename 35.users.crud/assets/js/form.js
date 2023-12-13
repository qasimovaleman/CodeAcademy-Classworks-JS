// const id = new URLSearchParams(window.location.search).get("id");
// const inputs = document.querySelectorAll(".form-control");
// const form = document.querySelector("form");
// //
// let BASE_URL = `http://localhost:8080`;

// //
// //

// async function getData() {
//   let response = await axios(`${BASE_URL}/${id}`);
//   inputs[0].value = `${response.data.name}`;
//   inputs[1].value = `${response.data.surname}`;
//   inputs[2].value = `${response.data.email}`;
//   inputs[3].value = `${response.data.userphoto}`;
// }
// if (id) {
//   getData();
// }
// //
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let dateValue = new Date();
//   let obj = {
//     name: inputs[0].value,
//     surname: inputs[1].value,
//     email: inputs[2].value,
//     date: dateValue.toLocaleString(),
//     userPhoto: `./assets/img/${inputs[3].value.split("\\")[2]}`,
//   };
//   console.log(obj);

//   if (!id) {
//     addData();
//   } else {
//     updateData();
//   }
// });
// async function addData(obj) {
//   await axios.post(`${BASE_URL}/`, obj);
//   window.location = "./index.html";
// }
// async function updateData(obj) {
//   await axios.patch(`${BASE_URL}/${id}`, obj);
//   window.location = "./index.html";
// }
