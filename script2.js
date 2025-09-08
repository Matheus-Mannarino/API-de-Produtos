let hamburguer = document.getElementById("ham"); //pegando o botao com id ham e criando uma variavel hamburguer
let menuSmall = document.getElementById("menuSm"); //pegando a div com id menusm e criando a variavel menuSmall

function mostraMenu() {  //função que irá mostrar ou esconder o menu para mobile
  menuSmall.classList.toggle("activated"); //a classe activated no css vai tornar o menu visivel ou invisivel
}

function pegarDadosSmartphones() { //função que será chamada ao clicar no botão
  const galeria = document.getElementById("galeria"); //criando a variavel galeria atraves do id no html
  galeria.innerHTML = '<p>Buscando Smartphones...</p>' //paragrafo com mensagem na galeria

  //iniciando a busca dos smartphones na api  
  fetch('https://dummyjson.com/products/category/smartphones')
  .then(resposta => {
    if(!resposta.ok) { //se a resposta da busca não for ok, mostre a mensagem de erro
      throw new Error('Erro ao buscar os smartphones na API')
    }
    return resposta.json(); //caso esteja tudo ok, converta a resposta para JSON
  })
  .then(dados => { //transformando o array da API em algo mais simples apenas com as informações solicitadas (nome e imagem)
    const smartphonesMapeados = dados.products.map(smartphone => {
      return {
        titulo: smartphone.title,
        imagemUrl: smartphone.images[0]
      };
    })
    criarGaleria(smartphonesMapeados, galeria); //função para criar a galeria
  })
  .catch(error => { //caso dê erro, mostre uma mensagem de erro
    console.error("Erro na API:", error);
    galeria.innerHTML = `<p>Ocorreu um erro ao carregar os smartphones: ${error.message}</p>`
  })
}

function criarGaleria(arrSmartphones, conteiner) { //função para criar a galeria, usando o array de smartphones 
  conteiner.innerHTML = ""; //limpando o conteudo do conteiner

  arrSmartphones.forEach(smartphone => { //percorrer todos os elementos do array para criar um card para cada um
    const card = document.createElement("div"); //criando uma div para ser o card
    card.className = "card-produto"

    const imagem = document.createElement("img"); //criando um elemento img para ser a imagem do card + legenda alt
    imagem.src = smartphone.imagemUrl;
    imagem.alt = `Imagem do ${smartphone.titulo}`;

    const cardConteudo = document.createElement("div"); //criando o div onde ficara o conteudo do card
    cardConteudo.className = "card-conteudo";

    const titulo = document.createElement("h3"); //criando um elemento h3 que sera o nome do produto
    titulo.textContent = smartphone.titulo;

    //montando o card
    cardConteudo.appendChild(titulo); //colocando o titulo dentro do conteudo do card
    card.append(imagem, cardConteudo); //adicionando a imagem ao conteudo do card

    conteiner.appendChild(card); //adicionando o card completo ao conteiner da galeria
  });
}