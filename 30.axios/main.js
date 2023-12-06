let eletronics = document.querySelector(".electronics");
let jewelery = document.querySelector(".jewelery");
let men = document.querySelector(".men");
let women = document.querySelector(".women");
let box = document.querySelector(".box");
//
const BASE_URL = "https://fakestoreapi.com/products";
//
axios.get(`${BASE_URL}/category/jewelery`).then((res) => console.log(res.data));
//
async function getData(endpoint) {
  const response = await axios(`${BASE_URL}/${endpoint}`);
  console.log(response.data);
  drawCards(response.data);
}
getData("");
//
function drawCards(array) {
  box.innerHTML = "";
  array.forEach((element) => {
    box.innerHTML += `
    <a href="./details.html?id=${element.id}">
    <img src="${element.image}" class="card-img-top " alt="">
</a>
    
      <p>${element.title}</p>
     
      <p>${element.price}</p>
      
      <p>${element.category}</p>
      `;
  });
}
eletronics.addEventListener("click", function () {
  getData("category/electronics");
});
jewelery.addEventListener("click", function () {
  getData("category/jewelery");
});
men.addEventListener("click", function () {
  getData("category/men's clothing");
});
women.addEventListener("click", function () {
  getData("category/women's clothing");
});
