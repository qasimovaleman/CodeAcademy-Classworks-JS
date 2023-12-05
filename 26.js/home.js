const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "Track your steps, heart rate, and more with this fitness tracker.",
    price: 49.99,
  },
  {
    id: 7,
    title: "Digital Camera",
    description: "High-resolution digital camera with various lenses.",
    price: 799.99,
  },
  {
    id: 8,
    title: "Wireless Keyboard and Mouse",
    description: "Ergonomic keyboard and mouse combo for your workstation.",
    price: 39.99,
  },
  {
    id: 9,
    title: "Microwave Oven",
    description: "Compact microwave oven for quick and easy cooking.",
    price: 69.99,
  },
  {
    id: 10,
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with rich, clear sound.",
    price: 49.99,
  },
  {
    id: 11,
    title: "Coffee Table",
    description: "Modern coffee table with storage and a glass top.",
    price: 149.99,
  },
];

//
let productsList = document.querySelector(".products");
let basketCount = document.querySelector(".basket-count");

let basket = getBasketFromLocalStorage() ?? [];

function drawProducts(data) {
  productsList.innerHTML = "";

  data.forEach((element) => {
    let divElem = document.createElement("div");
    divElem.className =
      "col-12 col-md-6 col-lg-4 my-3 d-flex justify-content-center";
    divElem.innerHTML = `
      <div class="card" style="width: 18rem">
      
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
       
        <p class="card-text fw-bold">
         ${element.price}
        </p>
        <p class="card-text">
        ${element.description}
       </p>
        <div class="d-flex justify-content-between align-items-center">
          <button href="#" class="btn btn-primary" onclick=addToBasket("${element.id}")>Add to Basket</button>
          <i class="fa-regular fa-heart text-danger"></i>
        </div>
      </div>
    </div>
      `;
    productsList.append(divElem);
  });
}

drawProducts(products);

function addToBasket(id) {
  let basketProduct = products.find((item) => item.id === id);

  let index = basket.findIndex((item) => item.product.id === id);

  if (index > -1) {
    basket[index].count = basket[index].count + 1;
  } else {
    basket.push({ count: 1, product: basketProduct });
  }

  console.log(index);
  setBasketToLocalStorage(basket);
  getBasketCount();
}

function setBasketToLocalStorage(arr) {
  localStorage.setItem("basket", JSON.stringify(arr));
}
function getBasketFromLocalStorage() {
  return JSON.parse(localStorage.getItem("basket"));
}

function getBasketCount() {
  //   basketCount.textContent = basket.length;
  basketCount.textContent = basket.reduce((sum, item) => sum + item.count, 0);
}

getBasketCount();
