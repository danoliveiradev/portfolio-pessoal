// ----- Criação card publicações -----

const addPub = document.querySelector('.add_pub');

//Obtendo dados do arquivo JSON
const requestURL1 = 'assets/JSON/publicacoes.json';
const request1 = new XMLHttpRequest();

request1.open('GET', requestURL1);

request1.responseType = 'json';
request1.send();

request1.onload = () => {
  let pub = request1.response;
  cardPub(pub);
}

//Função de criação do card publicação
function cardPub(pub) {
  for(let i = 0; i < pub.length; i++ ) {
    let card = document.createElement('div');
    let cardDescricao = document.createElement('div');


    let img = document.createElement('img');
    let descricao = document.createElement('p');
    let linkMais = document.createElement('a');

    card.classList.add('card');
    cardDescricao.classList.add('card__div');
    cardDescricao.classList.add('publicacao__div');

    img.src = pub[i]['imagem'];
    img.classList.add('card__img');
    descricao.classList.add('card__descricao');
    descricao.textContent = pub[i]['descricao'];
    linkMais.classList.add('links__card');
    linkMais.classList.add('publicacao__link');
    linkMais.href = pub[i]['link'];
    linkMais.textContent = 'Mais';

    cardDescricao.appendChild(descricao);
    cardDescricao.appendChild(linkMais);

    card.appendChild(img);
    card.appendChild(cardDescricao);

    addPub.appendChild(card);
  }
}