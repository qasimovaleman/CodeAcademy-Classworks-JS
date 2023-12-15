const name = new URLSearchParams(window.location.search).get("name");
const details = document.querySelector(".details");
const BASE_URL = `https://restcountries.com/v2/name`;
let body = document.querySelector("body");
let btn = document.querySelector(".darkButton");
const dark = document.querySelector(".dark");

//
async function getData() {
  const response = await axios(`${BASE_URL}/${name}`);
  console.log(response.data);
  drawCards(response.data[0]);
}
getData("name");
//
function drawCards(data) {
  details.innerHTML = "";

  details.innerHTML += `

              
              <div class="card cards" style="width: 16rem">
                  <img src="${data.flags.svg}" class="card-img-top cardComponent" alt="..." />
                  <div class="card-body">
                      <h5 class="card-title">${data.name}</h5>
                      <p class="card-text">Population:${data.population}</p>
                      <p>Region:${data.region}</p>
                      <p>Capital:${data.capital}</p>
                  </div> 
              </div> 
              `;
}
///////////////////////
localStorage.getItem("dark-mode") === "true" && body.classList.add("dark-mode");

btn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  localStorage.getItem("dark-mode") === "true"
    ? localStorage.setItem("dark-mode", false)
    : localStorage.setItem("dark-mode", true);
});
//

dark.addEventListener("click", function () {
  if (this.className == "fa-solid fa-moon") {
    this.className = "fa-regular fa-moon";
    this.style.color = "black";
  } else {
    this.className = "fa-solid fa-moon";
    this.style.color = "white";
  }
});
