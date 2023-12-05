let input = document.querySelector("input");
let button = document.querySelector("button");
divBottom = document.querySelector(".div-bottom");
//

fetch(
  "https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    //drawCards(data);
  })
  .catch((err) => console.log(err));
//
function drawCards(element) {
  divBottom.innerHTML = "";
  divBottom.innerHTML=`
  <div>${element.}</div>
  <img src="">
  <h3></h3>
  <p></p>
  <p></p>
  <p></p>
  
  `
}
