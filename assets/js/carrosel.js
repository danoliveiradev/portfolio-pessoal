const btnEsqProj = document.querySelector('.btn_esq-proj');
const btnDirProj = document.querySelector('.btn_dir-proj');
const btnEsqPub = document.querySelector('.btn_esq-pub');
const btnDirPub = document.querySelector('.btn_dir-pub');
const carroselProj = document.querySelector('.carrosel-proj');
const carroselPub = document.querySelector('.carrosel-pub');

const valorRolar = 1000;
var valorScroll = 0;

// Movimenta o carrosel da secao Projetos
btnEsqProj.addEventListener('click', () => {
  valorScroll = parseInt(carroselProj.scrollLeft);
  rolarTela('esqProj', valorScroll);
});

btnDirProj.addEventListener('click', () => {
  valorScroll = parseInt(carroselProj.scrollLeft);
  rolarTela('dirProj', valorScroll);
});

// Movimenta o carrosel da secao Publicacoes
btnEsqPub.addEventListener('click', () => {
  valorScroll = parseInt(carroselPub.scrollLeft);
  rolarTela('esqPub', valorScroll);
});

btnDirPub.addEventListener('click', () => {
  valorScroll = parseInt(carroselPub.scrollLeft);
  rolarTela('dirPub', valorScroll);
});

function rolarTela(direcao, valor) {
  var TelaMin = carroselProj.clientWidth;
  var TelaMax = carroselProj.scrollWidth;

  switch (direcao) {
    case 'esqProj':
      if (valor === 0) {
        carroselProj.scrollLeft = (TelaMax - TelaMin + 1);
      } else {
        carroselProj.scrollLeft -= valorRolar;
      }
      break;

    case 'dirProj':
      if (valor === (TelaMax - TelaMin + 1)) {
        carroselProj.scrollLeft = 0;
      } else {
        carroselProj.scrollLeft += valorRolar;
      }
      break;

    case 'esqPub':
      if (valor === 0) {
        carroselPub.scrollLeft = (TelaMax - TelaMin + 1);
      } else {
        carroselPub.scrollLeft -= valorRolar;
      }
      break;

    case 'dirPub':
      if (valor === (TelaMax - TelaMin + 1)) {
        carroselPub.scrollLeft = 0;
      } else {
        carroselPub.scrollLeft += valorRolar;
      }
      break;
  }
}
