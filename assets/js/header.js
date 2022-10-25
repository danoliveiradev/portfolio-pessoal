// -------- Ativação menu hamburguer --------

var btnMenu = document.querySelector('[data-btnMenu]');
var menuMobile = document.querySelector('[data-listaMenu]');
var efeitoGlass = document.querySelector('[data-glass]');

btnMenu.addEventListener('click', () => {
  menuLateral();
})

function menuLateral() {
  if (menuMobile.style.display === 'none') {
    menuMobile.style.display = 'block';
    btnMenu.classList.replace('menu-hamburguer--abrir', 'menu-hamburguer--fechar');
    efeitoGlass.classList.add('menu--efeito-glass');
  } else {
    menuMobile.style.display = 'none';
    btnMenu.classList.replace('menu-hamburguer--fechar', 'menu-hamburguer--abrir');
    efeitoGlass.classList.remove('menu--efeito-glass');
  }
}