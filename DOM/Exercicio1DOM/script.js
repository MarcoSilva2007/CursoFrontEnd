// Parte 1
let h1 = document.getElementsByTagName("h1");
let p = document.getElementsByTagName("p");
let button = document.getElementsByTagName("button");

console.log(h1);
console.log(p);
console.log(button);

// Parte 2
function MudarH1() {
    let h1 = document.querySelector("h1");
    h1.innerText = "Mudou o Titulo";
}

function MudarP() {
    let p = document.querySelector("p");
    p.innerText = "Mudou o Paragrafo";
}

// Parte 3
function MudarFundo() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
}

// Parte 4
function AlterarClasse() {
    let h1 = document.querySelector("h1");
    h1.classList.add("titulo-destaque");
}