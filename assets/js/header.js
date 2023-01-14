// -------- Funções menu hamburguer --------

const btnMenu = document.querySelector('[data-btnMenu]');
const menuMobile = document.querySelector('[data-listaMenu]');
const efeitoGlass = document.querySelector('[data-glass]');

// Evento de click menu hamburguer
btnMenu.addEventListener('click', () => {
  if (menuMobile.style.display === 'none') {
    exibeMenuLateral();
  } else {
    removeMenuLateral();
  }
})

// Função que exibe o menu lateral
function exibeMenuLateral() {
  menuMobile.style.display = 'block';
  btnMenu.classList.replace('menu-hamburguer--abrir', 'menu-hamburguer--fechar');
  efeitoGlass.classList.add('menu--efeito-glass');
  sombraAtiva()
}

// Função que remove o menu lateral
function removeMenuLateral() {
  menuMobile.style.display = 'none';
  btnMenu.classList.replace('menu-hamburguer--fechar', 'menu-hamburguer--abrir');
  efeitoGlass.classList.remove('menu--efeito-glass');
  sombraDesativada()
}

// Ao clicar em um link de seção do menu hamburguer o menu é fechado
const linkSecao1 = document.querySelector('.secao1');
const linkSecao2 = document.querySelector('.secao2');
const linkSecao3 = document.querySelector('.secao3');
const linkSecao4 = document.querySelector('.secao4');

// Eventos de click na seção
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

//Cabecalho cria sombra ao rolar tela
let rolar = document.documentElement;
const cabecalho = document.querySelector('.cabecalho');

window.addEventListener('scroll', () => {
  if (rolar.scrollTop > 0) {
    sombraAtiva()
  } else {
    sombraDesativada()
  }
})

// Função ativa sombra do cabeçalho
function sombraAtiva() {
  cabecalho.style.boxShadow = '0px 0px 8px 0px var(--sombra)';
}

// Função desativa sombra do cabeçalho
function sombraDesativada() {
  cabecalho.style.boxShadow = 'none';
}