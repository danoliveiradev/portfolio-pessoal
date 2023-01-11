// -------- Ativação menu hamburguer --------

const btnMenu = document.querySelector('[data-btnMenu]');
const menuMobile = document.querySelector('[data-listaMenu]');
const efeitoGlass = document.querySelector('[data-glass]');

// Ao clicar em um link de seção do menu hamburguer o menu é fechado
const linkSecao1 = document.querySelector('.secao1');
const linkSecao2 = document.querySelector('.secao2');
const linkSecao3 = document.querySelector('.secao3');
const linkSecao4 = document.querySelector('.secao4');

btnMenu.addEventListener('click', () => {
  exibeMenuLateral();
})

// Abre e fecha o menu hamburguer
function exibeMenuLateral() {
  if (menuMobile.style.display === 'none') {
    menuMobile.style.display = 'block';
    btnMenu.classList.replace('menu-hamburguer--abrir', 'menu-hamburguer--fechar');
    efeitoGlass.classList.add('menu--efeito-glass');
  } else {
      removeMenuLateral();
  }
}

function removeMenuLateral() {
  menuMobile.style.display = 'none';
  btnMenu.classList.replace('menu-hamburguer--fechar', 'menu-hamburguer--abrir');
  efeitoGlass.classList.remove('menu--efeito-glass');
}

linkSecao1.addEventListener('click', () => {
  removeMenuLateral();
})
linkSecao2.addEventListener('click', () => {
  removeMenuLateral();
})
linkSecao3.addEventListener('click', () => {
  removeMenuLateral();
})
linkSecao4.addEventListener('click', () => {
  removeMenuLateral();
})
