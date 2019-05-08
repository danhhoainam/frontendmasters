document
  .querySelector(".request-test")
  .addEventListener("click", function(params) {
    fetch("/test")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".test").innerText = data.test;
      })
      .catch(function(err) {
        console.log(err);
      })
  })