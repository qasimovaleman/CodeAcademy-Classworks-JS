const productsDiv = document.querySelector(".products-div");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

const BASE_URL = `https://api.escuelajs.co/api/v1`;


function fetchProducts(){
    fetch(`${BASE_URL}/products`)
}

// fetch(`${BASE_URL}/customers`)
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log(data);
//     drawCards(data);
//   })
//   .catch((err) => console.log(err));

// function drawCards(array) {
//   products.innerHTML = "";
//   array.forEach((element) => {
//     products.innerHTML += `
//         <div class="col-12 col-md-6 col-lg-3 mb-4 card-info">
//         <div class="card" style="width: 18rem">
//         <div class="product">
//         <div class="product-image">
//           <img src="$" style="width: 100%" alt="" />
//         </div>
//         <div class="product-heading">
//           <p class="title">title ${element.title}</p>
//           <p class="description">Descprition ${element.description.slice(0,90)}...</p>
//           <span>Price</span>
//           <div><button class="deleteBtn">Delete</button></div>
//         </div>
//       </div>
//      </div>
//  </div>
// </div>
//         `;
//   });
// }

// function deleteCustomer(id, btn) {
//   if (confirm("Are u sure to delete customer??")) {
//     fetch(`${BASE_URL}/customers/${id}`, {
//       method: "DELETE",
//     });

//     btn.closest(".card-info").remove();
//   }
// }

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let obj = {
//     companyName: allInputs[0].value,
//     contactTitle: allInputs[1].value,
//     address: {
//       street: allInputs[2].value,
//       city: allInputs[3].value,
//       country: allInputs[4].value,
//     },
//   };

//   fetch(`${BASE_URL}/customers`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   }).then(() => {
//     fetch(`${BASE_URL}/customers`)
//       .then((response) => response.json())
//       .then((data) => {
//         drawCards(data);
//       })
//       .catch((err) => console.log(err));
//   });

//   allInputs.forEach((item) => (item.value = ""));
// });
