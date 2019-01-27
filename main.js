// GLOBAL VARIABLES

var dogInput = document.querySelector('.namebox');

var dogName = document.querySelector('.dog-name');

var enterButton = document.querySelector('.namethisdog');

// EVENT LISTENERS

enterButton.addEventListener('click', changeName);

// FUNCTIONS

function changeName(e) {
  e.preventDefault();
  dogName.innerText = dogInput.value
  dogInput.value = "";
}