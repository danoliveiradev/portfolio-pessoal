const btnEsqProj = document.querySelector('.btn_esq-proj');
const btnDirProj = document.querySelector('.btn_dir-proj');
const btnEsqPub = document.querySelector('.btn_esq-pub');
const btnDirPub = document.querySelector('.btn_dir-pub');
const carroselProj = document.querySelector('.carrosel-proj');
const carroselPub = document.querySelector('.carrosel-pub');


// Movimenta o carrosel da secao Projetos
btnEsqProj.addEventListener('click', () => {
  carroselProj.scrollLeft -= 200;
});

btnDirProj.addEventListener('click', () => {
  carroselProj.scrollLeft += 200;
});


// Movimenta o carrosel da secao Publicacoes
btnEsqPub.addEventListener('click', () => {
  carroselPub.scrollLeft -= 200;
});

btnDirPub.addEventListener('click', () => {
  carroselPub.scrollLeft += 200;
});