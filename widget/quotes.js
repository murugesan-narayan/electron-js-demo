let axios = require("axios");

function getQuote() {
  axios
    .get(
      `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&per_page=1&_fields=content.rendered&timestamp=${Date.now()}`
    )
    .then((resp) => {
      console.log(resp.data);
      let randomQuote = resp.data[0]["content"].rendered;
      document.getElementById("quote").innerHTML = randomQuote;
    });
}

getQuote();

setInterval(function () {
  getQuote();
}, 10000);
