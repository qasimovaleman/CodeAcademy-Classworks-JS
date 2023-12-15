//
const searchInput = document.querySelector(".searchInput");
const product = document.querySelector(".product");
const BASE_URL = `https://restcountries.com/v2`;
let body = document.querySelector("body");
let btn = document.querySelector(".darkButton");
const dark = document.querySelector(".dark");
const select = document.querySelector(".select");

let arr;
//
async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  drawCards(response.data);
  arr = response.data;
}
getData("all");
//
function drawCards(data) {
  product.innerHTML = "";
  data.forEach((element) => {
    product.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <a href="./details.html?name=${element.name}">
            
            <div class="card cards" style="width: 16rem">
                <img src="${element.flags.svg}" class="card-img-top cardComponent" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">Population:${element.population}</p>
                    <p>Region:${element.region}</p>
                    <p>Capital:${element.capital}</p>
                </div> 
            </div> 
            
            </a>
        </div>`;
  });
}
//
//drawCards("all");
//

searchInput.addEventListener("input", function (e) {
  // e.preventDefault();
  let filtered = arr.filter((item) =>
    item.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  console.log(filtered);
  drawCards(filtered);
});

//
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
///////////////////////////
select.addEventListener("change", (e) => getRegion(e.target.value));

async function getRegion(getRegion) {
  const response = await axios(`${BASE_URL}/region/${getRegion}`);
  console.log(response.data);
  drawCards(response.data);
}
