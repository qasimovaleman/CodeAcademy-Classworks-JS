let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
const BASE_URL = `http://localhost:8080`;
const id = new URLSearchParams(window.location.search).get("id");
console.log(id);
//
async function getBlogs() {
  try {
    let response = await axios(`${BASE_URL}/suppliers/${id}`);
    console.log(response.data);

    (allInputs[0].value = response.data.title),
      (allInputs[1].value = response.data.body),
      (allInputs[2].value = response.data.author);
  } catch (error) {
    console.log(error);
  }
}
//
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const supplier = {
    companyName: allInputs[0].value,
  
      street: allInputs[1].value,
      phone: allInputs[2].value,
      city: allInputs[3].value,
      country: allInputs[4].value,
   
  };
});
