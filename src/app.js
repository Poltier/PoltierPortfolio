var loader = document.querySelector('.loader');
console.log(loader);
window.addEventListener('load', vanish);

function vanish() {
  loader.classList.add('disppear');
}

// Obtener el botón y el menú
var button = document.querySelector('.menu-button');
var menu = document.querySelector('.menu');

// Mostrar y ocultar el menú al hacer clic en el botón
button.addEventListener('click', function () {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});
