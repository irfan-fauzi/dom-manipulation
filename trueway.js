// universal selector
const doc = document.body;

// end selector

// event
doc.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault(); // jaga-jaga mungkin target == link
  }
});
