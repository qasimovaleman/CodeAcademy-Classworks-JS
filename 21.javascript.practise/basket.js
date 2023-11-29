//let total = document.querySelector(".total");
//let cont = document.querySelector(".container");

//const basketEl = JSON.parse(localStorage.getItem("basket"));

let allProducts = document.querySelector(".products");







//let basketItems = localStorage.setItem("basket", JSON.stringify(products));
let basketItems=JSON.parse
let basket = JSON.parse(localStorage.getItem("products")) ?? [];
function addToBasket(id) {
  let findItem = products.find((item) => item._id);
  basket.push(findItem);
  localStorage.setItem("products", JSON.stringify(basket));
}








userData(basketEl);
function userData(data) {
  (allProducts.innerHTML = ""),
    data.forEach((element) => {
      allProducts.innerHTML += `<div class="col col-12 col-md-6 col-lg-4 my-3">
      <div class="card" style="width: 18rem">
        <img src="${element.thumbnail}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <h5 class="card-title-price"> ${element.price}</h5>
          <p class="card-text">
          ${element.description.slice(0, 100)}...
          </p>
          
          <div class="btn-icon d-flex justify-content-between align-items-center">
         
          <i class="fa-regular fa-heart color=danger"></i>
          </div>
        </div>
      </div>
    </div>`;
    });
}

