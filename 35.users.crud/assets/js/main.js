let tBody = document.querySelector("tbody");
const BASE_URL = "localhost:3000";
//
async function getData(endPoint) {
  const res = await axios(`${BASE_URL}/${endPoint}`)
  const data = res.data
  console.log(res);

}
getData("users");
//
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
    <a href="form.html? id=${element.id}" class="btn btn-success">Edit</a>
    <button class="btn btn-danger" onclick=deleteUser(${element.id},this)>Delete</button>
    <button class="btn btn-primary">Add Fav</button>
    </td>
    
    `;
    tBody.append(trElem);
  });
}
//
async function deleteUser(id, btn) {
  console.log("salam");
  if (confirm("What you want to Delete?")) {
    btn.closest("th");
    await axios.delete(`${BASE_URL}/users/${id}`);
  }
}
//
let fav = JSON.parse(localStorage.getItem("fav")) ?? [];
async function addToFav(id, btn) {
  let response = await axios(`${BASE_URL}/users/${id}`);
  console.log(response.data);
  let obj = fav.find((item) => item.id === id);
  if (!obj) {
    fav.push(response.data);
    localStorage.setItem("fav", JSON.stringify(fav));
  }
}
