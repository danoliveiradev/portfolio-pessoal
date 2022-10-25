var btnPopUpAbrir = document.querySelector('[data-btnSobre]');
var btnPopUpFechar = document.querySelector('[data-btnFechar]');
var popUp = document.querySelector('[data-popUp]');

// -------- Ativação do pop-Up Sobre --------

btnPopUpAbrir.addEventListener('click', () => {
  abrePopUp();
})

btnPopUpFechar.addEventListener('click', () => {
  fechaPopUp();
})

function abrePopUp() {
  if (popUp.style.display === 'none') {
    popUp.style.display = 'block';
  }
}

function fechaPopUp() {
  if (popUp.style.display === 'block') {
    popUp.style.display = 'none';
  }
}
