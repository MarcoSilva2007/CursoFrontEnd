// script para as perguntas do quiz

let perguntas = [];
let perguntasAtual = 0;

let perguntaElement = document.getElementById("pergunta");
let opcoesELemnt = document.getElementById("opcoes");
let proximaELemnt = document.getElementById("proxima");
let resultadoELemnt = document.getElementById("resultado");

// carregar as perguntas do arquivo json
fetch("perguntas.json").then(response => response.json()).then(data =>{
    perguntas = data;
    carregarPerguntas();
}).catch(error => console.error("Erro ao carregar perguntas: ", erro));

// criar a função para carregar as perguntas no html
function carregarPerguntas(){

}