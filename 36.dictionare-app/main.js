const BASE_URL = "https:api.dictionaryapi.dev/api/v2/entries/en";
const searchInput = document.querySelector(".searchInput");
const form = document.querySelector("form");
const definition = document.querySelector(".ikonText");
//
async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data[0]);
  drawWords(response.data);
}

//
function drawWords(data) {
  definition.innerHTML = "";
  data.forEach((element) => {
    definition.innerHTML += `
    <div class="divTop">
    <p>${element.word}</p>
    <i onclick="playAudio(this)" class="fa-solid fa-volume-high"> <audio src="${element?.phonetics[0]?.audio}"></audio></i>
  </div>
    
  <div class="divBottom">
  <p>${element?.meanings[0]?.definitions[0].definition}</p>
  <p>${element?.meanings[0]?.definitions[0].example}</p>
  </div> 
      `;
  });
}
//
form.addEventListener("submit", function (e) {
  e.preventDefault();
  getData(searchInput.value);
});
//
function playAudio(icon) {
    console.log(icon);
//   icon.querySelector("audio").play();
}
