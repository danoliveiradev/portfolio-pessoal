// -------- Ativação do pop-Up Sobre --------

var btnPopUpAbrir = document.querySelector('[data-btnSobre]');
var btnPopUpFechar = document.querySelector('[data-btnFechar]');
var popUp = document.querySelector('[data-popUp]');

// Evento abrir pop-up sobre
btnPopUpAbrir.addEventListener('click', () => {
  abrePopUp();
})

// Evento fechar pop-up sobre
btnPopUpFechar.addEventListener('click', () => {
  fechaPopUp();
})

//Função abrir pop-up sobre
function abrePopUp() {
  if (popUp.style.display === 'none') {
    popUp.style.display = 'block';
  }
}

//Função fechar pop-up sobre
function fechaPopUp() {
  if (popUp.style.display === 'block') {
    popUp.style.display = 'none';
  }
}
