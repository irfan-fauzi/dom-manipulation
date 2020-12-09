const lisectionB = document.querySelector("section#b ul li:nth-child(1)");
const semuaLi = document.querySelectorAll("section#b li");
const sectionB = document.querySelector("section#b ul");



// end element ---------------------

// start function ------------------

// CHANGE ELEMEN HTML
function changeText(el, newText) {
  if (el.length > 1) {
    el.forEach(function (el) {
      return el.innerHTML = newText;
    })
  }
  return el.innerHTML = newText;
}
// TOGGLE CLASS
function toggleClass(el, className) {
  return el.classList.toggle(className);
}

// ADD ELEMENT to PARENT
function addEl(el, textNode, parent) {
  const newEl = document.createElement(el);
  const nodeEl = document.createTextNode(textNode);
  newEl.appendChild(nodeEl);
  parent.appendChild(newEl)
}

// addEl('li', 'saya gila', sectionB);

// REMOVE ELEMEN
function removeEl(child, parent) {
  return parent.removeChild(child);
}
// removeEl(lisectionB, sectionB);


// REPLACE ELEMEN
function replaceEL(parent, oldElemen, newElemen) {
  return parent.replaceChild(newElemen, oldElemen)
}

//replaceEL(sectionB, lisectionB, newLi)
function buatElemenNode(node, text) {
  const elBaru = document.createElement(node);
  const textBaru = document.createTextNode(text);
  elBaru.appendChild(textBaru);
  return elBaru
}

//const buat = buatElemenNode("p", "waaau");

//replaceEL(sectionB, lisectionB, buatElemenNode("li", "waaau"))
lisectionB.addEventListener('click', function (e) {
  // addEl('li', 'saya gila', sectionB);
  console.log(e)
})










