let hamburguer = document.getElementById("ham"); //pegando o botao com id ham e criando uma variavel hamburguer
let menuSmall = document.getElementById("menuSm"); //pegando a div com id menusm e criando a variavel menuSmall

function mostraMenu() { //função que irá mostrar ou esconder o menu para mobile
  menuSmall.classList.toggle("activated"); //a classe activated no css vai tornar o menu visivel ou invisivel
};

function pegarDados() { //função que será chamada ao clicar no botao
  const idProduto = prompt("Digite a ID de um produto (1 a 30):"); //prompt pedindo ao usuario uma id de 1 a 30

  if(!idProduto || isNaN(idProduto) || idProduto < 1 || idProduto > 30) { //verificando se o prompt inserido é um numero menor que 1 ou maior que 30
    alert("Insira um ID válido (1 a 30)!"); //alerta de erro caso o prompt não seja um numero, ou um número menor que 1 ou maior que 30
    return;
  }

  const galeria = document.getElementById("galeria"); //criando a variavel galeria através da id da div no html
  galeria.innerHTML = '<p>Buscando produto...</p>'; //pequeno parágrafo com uma mensagem na galeria

  //iniciando busca na API usando a id inserida pelo usuario
  fetch(`https://dummyjson.com/products/${idProduto}`)
    .then(resposta => {
      if(!resposta.ok) { //se a resposta não for ok, mostre uma mensagem de erro
        throw new Error ("Não foi possível encontrar o produto, verifique a ID");
      }
      return resposta.json(); //se estiver tudo ok, converta a resposta para JSON
    })
    .then(produto => { //agora já com os dados em json, será criado o card do produto
      const cardProduto = criarCard(produto);
      galeria.innerHTML = cardProduto;
    })
    .catch(error => { //caso dê erro em algum dos passos, mostre uma mensagem de erro
      console.error("Erro na busca de dados da API:", error);
      galeria.innerHTML = '<p>Ocorreu um erro: ${error.message}</p>';
    });
}

function criarCard(produto) { //criando a função de criar o card do produto
  return ` 
  <div class="card-produto">
    <img src="${produto.images[0]}" alt="Imagem do produto ${produto.title}">
    <div class="card-conteudo">
      <h3>${produto.title} (ID: ${produto.id})</h3>
        <p class="categoria"><strong>Categoria:</strong> ${produto.category}</p>
        <p class="descricao">${produto.description}</p>
      </div>
    </div>
    `; //a função ira retornar um card contendo imagem, nome, id, categoria e descrição do produto
}