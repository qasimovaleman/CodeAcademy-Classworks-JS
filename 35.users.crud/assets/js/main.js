let tBody = document.querySelector("tbody");
const BASE_URL = "http://localhost:8080";
//

async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  drawTable(response.data);
}
getData("users");

// //
// //
function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML += `

    <td>${element.id}</td>
    <td> <img src="${element.userphoto}" class="image"></td>
    <td>${element.name}</td>
    <td>${element.surname}</td>
    <td>${element.email}</td>
    <td>${element.email}</td>
    <td>
    <a href="form.html?id=${element.id}" class="btn btn-success">Edit</a>
    <button class="btn btn-danger" onclick=deleteUser(${element.id},this)>Delete</button>
    <button class="btn btn-primary" onclick=addToFav(${element.id},this)>Add Fav</button>
    </td>

    `;
    tBody.append(trElem);
  });
}
// //
async function deleteUser(id, btn) {
  console.log("salam");
  if (confirm("What you want to Delete?")) {
    btn.closest("th");
    await axios.delete(`${BASE_URL}/users/${id}`);
  }
}
//
//

// //
// //

async function addToFav(id) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let res = await axios(`${BASE_URL}/users/${id}`);
  let result = users.find((item) => item.id === id);
  if (!result) {
    users.push(res.data);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    window.alert("This is on the favorites page");
  }
}
