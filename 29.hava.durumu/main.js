let input = document.querySelector(".input");
let button = document.querySelector("button");
let divBottom = document.querySelector(".div-bottom");
let form = document.querySelector("form");
//

//
function getWeather(curCity) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`
  )
    .then((response) => response.json())
    .then((data) => {
      divBottom.innerHTML = `
  <div>
  <p>${data.location.name} , ${data.location.country}</p>

  <img src="${data.current.condition.icon}">
  <p>${data.current.condition.text}</p>
  <p>Selsie: ${data.current.temp_c}</p>
  <p>Farangeit: ${data.current.temp_fw}</p>
  <p></p>
  </div>
  `;
    });

  //divBottom.innerHTML = "";
}
getWeather("Ganja");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  getWeather(input.value);
});
