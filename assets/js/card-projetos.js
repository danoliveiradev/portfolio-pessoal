// ----- Criação card projeto -----

const addProjeto = document.querySelector('.add_projeto');

//Obtendo dados do arquivo JSON
const requestURL = 'assets/JSON/projetos.json';
const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = () => {
  let projeto = request.response;
  cardProjeto(projeto);
}

//Função de criação dos cards
function cardProjeto(projeto) {
  for(let i = 0; i < projeto.length; i++ ) {
    let card = document.createElement('div');
    let cardDescricao = document.createElement('div');
    let cardLinks = document.createElement('div');

    let img = document.createElement('img');
    let descricao = document.createElement('p');
    let linkMais = document.createElement('a');
    let linkVisualizar = document.createElement('a');

    card.classList.add('card');
    cardDescricao.classList.add('card__div');
    cardDescricao.classList.add('projeto__div');
    cardLinks.classList.add('links__card');
    cardLinks.classList.add('link__projeto');

    img.src = projeto[i]['imagem'];
    img.classList.add('card__img');
    descricao.classList.add('card__descricao');
    descricao.textContent = projeto[i]['descricao'];
    linkMais.classList.add('projeto__link');
    linkMais.href = projeto[i]['projeto'];
    linkMais.textContent = 'Mais';
    linkVisualizar.classList.add('projeto__link');
    linkVisualizar.href = projeto[i]['site'];
    linkVisualizar.textContent = 'Visualizar';

    cardLinks.appendChild(linkMais);
    cardLinks.appendChild(linkVisualizar);

    cardDescricao.appendChild(descricao);
    cardDescricao.appendChild(cardLinks);

    card.appendChild(img);
    card.appendChild(cardDescricao);

    addProjeto.appendChild(card);
  }
}