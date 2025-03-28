// Script de manipulação DOM
// Usando GetElementById > Variável SImples
let titulo = document.getElementById("titulo"); //Ele ira até o HTML pegar a informação que tem o ID "titulo"
console.log(titulo); //Mostrando o resultado no terminal
titulo.innerText = "Outro Titulo"; //Alterando o texto do HTML pela ID

// Usando GetElementByTagName > Variável de Vetor (Array)
let paragrafo = document.getElementsByTagName("p"); //Ele ira até o HTML pegar a informação que tem o tag "p"
paragrafo[0].innerText = "Exemplo de paragráfo modificado por DOM "; //Modificar elemento
// Modificar o style do paragrafo
paragrafo[1].style.color = "red";

// Usando GetElementByClassName > Variável de Vetor (Array)
let descricao = document.getElementsByClassName("descricao");
// Modificar o style da descricao
for(let i = 0; i<descricao.length; i++){
    descricao[i].style.color ="blue";
}


// querrySelector > Variável SImples
let p = document.querySelector("p");
// Modificação de Font
p.style.fontWeight = "bold";

// querrySelectorAll > Variável de Vetor (Array)
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach(element => {
    element.style.fontWeight = "bold";
});

// Eventos Listener (Ouvinte)
function MudarCorFundo() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "green";
}

// Chamndo direto no script o ouvinte
document.getElementById("btnColor").addEventListener("click", OutraCor);

function OutraCor() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
}