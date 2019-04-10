const API_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(API_URL);
const root = document.querySelector(".dogImage");

promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(response) {
    const { message } = response;
    const img = document.createElement("img");
    img.src = message;
    img.alt = "Image of dog";
    root.appendChild(img);
  })