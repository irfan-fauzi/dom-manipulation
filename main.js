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

// ADD ELEMENT
function addEl(el, textNode, parent) {
  const newEl = document.createElement(el);
  const nodeEl = document.createTextNode(textNode);
  newEl.appendChild(nodeEl);
  parent.appendChild(newEl)
}

// addEl('li', 'saya gila', sectionB);

// Remove element
function removeEl(child, parent) {
  return parent.removeChild(child);
}
// removeEl(lisectionB, sectionB);












