const search = document.querySelector(".search");
const tBody = document.querySelector("tbody");

const loadingOverlay = document.querySelector("#loading-overlay");
const BASE_URL = `http://universities.hipolabs.com`;
//
// http://universities.hipolabs.com/search?country=Azerbaijan&name=${e.target.value}
async function getData(endpoint) {
  let response = await axios(`${BASE_URL}/${endpoint}`);
  console.log(response.data);
  loadingOverlay.classList.remove("open");
  drawTable(response.data);
}
getData("search?country=Azerbaijan");

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");

    trElem.innerHTML += `
    <td>${element.name}</td>
    <td>${element.country}</td>
    <td>${element.domains}</td>
    <td> <a href="${element.web_pages[0]}">${element.web_pages[0]}</a></td>
    `;
    tBody.append(trElem);
  });
}
//
// search.addEventListener("input", function (e) {
//   let endpoint = `search?country=Azerbaijan&name=${e.target.value}`;
//   getData(endpoint);
// });
search.addEventListener("input", function (e) {
  let endpoint = `search?country=Azerbaijan&name=${e.target.value}`;
  loadingOverlay.classList.remove("open");
  getData(endpoint);
});
