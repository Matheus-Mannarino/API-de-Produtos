# 🛒 API de Produtos
Projeto feito para uma avaliação no 1º período da faculdade de Ciência de Dados e Inteligência Artifical na disciplina de Desenvolvimento Web. 

## 📒 Linguagens Utilizadas
<div style="display: inline_block"><br>
  <img align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
</div>

## 🎯 Objetivo
Desenvolver um site responsivo, mobile first (celulares) usando técnicas de layout como Flexbox ou CSS Grid.

Criar uma aplicação web interativa que apresente informações sobre produtos específicos dependendo do input do usuário, e sobre a categoria de produtos smartphones usando a API dummyjson.com.

## ⚙️ Requisitos

Um site com 2 páginas onde haja:

1. Header com um ícone (a sua escolha) e nav para navegação entre as duas páginas.

2. No header tem menu hamburguer para celulares e muda para links horizontais sem hamburguer para desktop.

3. Um div com um botão, devidamente identificado, em cada página.

4. Um main onde haja um div conteiner para uma galeria (em cada página).

5. Na index.html o botão chama uma função que busca dados na API dummyjson.com, que são referentes a todos os produtos e pede um prompt ao usuário, para entrar um id de produto, que vai de 1 a 30.

6. Uma vez captados os dados do produto escolhido, um único card será exibido na galeria com as informações de id, nome, descrição, categoria e uma imagem do produto.

7. Na segunda página o botão chama outra função que limpa qualquer card presente na galeria e busca os dados na API sobre os produtos que são smartphones.

8. Use a url https://dummyjson.com/products/category/smartphones. Insira todos os smartphones que a API retorna (total de 16), cada um em um card com as informações de modelo e a imagem do produto (cada smartphone possui uma propriedade images, que é um array de strings que são urls de imagens do celular. Você só precisa acessar a url da primeira imagem do array - images[0]).

9- Layout: deve ser de uma coluna em celulares e três em desktops (no caso da galeria de smartphones).
