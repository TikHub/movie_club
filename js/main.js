var body = document.querySelector("body");
var lays = document.querySelector(".prod__lays");
var popcorn = document.querySelector(".prod__popcorn");
var pringles = document.querySelector(".prod__pringles");
var cola = document.querySelector(".prod__cola");
var pepsi = document.querySelector(".prod__pepsi");
var movieClap = document.querySelector(".prod__movieClap");
var freshBottle = document.querySelector(".prod__freshBottle");
body.addEventListener("mousemove", function(e) {
  e.stopPropagation();
  lays.style.transform = `translate(${e.offsetX / 100}px,${e.offsetY / 100}px)`;
  popcorn.style.transform = `translate(${e.offsetX / 120}px,-${e.offsetY /
    120}px)`;
  pringles.style.transform = `translate(-${e.offsetX / 140}px,${e.offsetY /
    140}px)`;
  pepsi.style.transform = `translate(-${e.offsetX / 100}px,${e.offsetY /
    100}px)`;
  cola.style.transform = `translate(-${e.offsetX / 60}px,-${e.offsetY / 60}px)`;
  movieClap.style.transform = `translate(-${e.offsetX / 50}px,-${e.offsetY /
    50}px)`;
  freshBottle.style.transform = `translate(-${e.offsetX / 90}px,-${e.offsetY /
    90}px)`;
});

function getMovieData() {
  // debugger;
  var request = new Request(
    encodeURI(
      "http://www.omdbapi.com/?apikey=2fed1d4&t=snatch&plot=full&r=json"
    ),
    {
      method: "GET",
      mode: "no-cors",
      redirect: "follow",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }
  );
  fetch(request).then(function(response) {
    console.log("responce ", response);
  });
}
