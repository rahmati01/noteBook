var inputEl = document.querySelector(`.form input`);
var listEl = document.querySelector(`ul`);

document.forms[0].addEventListener(`submit`, addItem);
listEl.addEventListener(`click`, close);

function addItem(e) {
  e.preventDefault();
  if (inputEl.value.trim() != ``) {
    listEl.innerHTML += `<li>${inputEl.value} <i class="bx bx-x-circle"></i></li>`;
  }
  inputEl.value = ``;
  inputEl.focus();
}

function close(e) {
  if (e.target.nodeName === `I`) {
    e.target.parentElement.remove();
  }
}
