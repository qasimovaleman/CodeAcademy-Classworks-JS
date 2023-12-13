let cards = document.querySelector(".cards");
let users = JSON.parse(localStorage.getItem("users"));
function drawCards(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
        <div class="card" style="width: 18rem">
        <img src="${element.userphoto}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-name-surname">${element.name} ${element.surname}</h5>
          <p class="card-text">${element.email}</p>
          <p class="card-date">${element.date}</p>
          <button class="btn btn-primary">Remove Fav</button>
        </div>
      </div> 
      `;
  });
}
drawCards(users);
function deleteUser(id, btn) {
  if (confirm("Do you want to delete favorites")) {
    let filter = users.filter((element) => element.id != id);
    btn.closest(".card").remove();
    localStorage.setItem("users", JSON.stringify(filter));
  }
}
//
