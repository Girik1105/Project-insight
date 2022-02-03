

let quote = document.getElementById("quote");
const author = document.getElementById("author");

let randomizer = Math.floor(Math.random() * 1500);

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
      quote.innerHTML = data[randomizer]['text'];
      author.innerHTML = "~" + data[randomizer]['author'];
  });
