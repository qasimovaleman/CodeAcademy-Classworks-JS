//
let arr = JSON.parse(localStorage.getItem("addArr")) ?? [];

//
$(".add").on("click", function (event) {
  event.preventDefault();
  //console.log($(".addInput").val());
  let text = document.createElement("p");
  text.innerText = $(".addInput").val();
  $(".select").append(text);

  $("p").css({
    backgroundColor: "green",
    color: "white",
    height: "40px",
    width: "150px",
    borderRadius: "4px",
    padding: "auto",
  });
  $(".addInput").val("");
  text.addEventListener("click", function () {
    this.remove();
  });

  arr.push(text.innerText);
  localStorage.setItem("addArr", JSON.stringify(arr));
});

