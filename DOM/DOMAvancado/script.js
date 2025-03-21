// Adiconar elementos avançados com DOM
// Construir um cabeçalho com DOM (Header)
let header = document.createElement("header"); // Criou o elemento
header.style.backgroundColor = "black";
header.style.height = "8vh";
document.body.appendChild(header);// Adicionou o elemento header como filho do body
document.body.style.margin = "0";// Tirar o margin do body

// Adicionar elementos no header
let divNav = document.createElement("div");
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.color = "aliceblue";
divNav.style.height = "100%";
divNav.style.alignItems = "center";
divNav.style.fontSize = "5vh";
divNav.style.fontFamily = "Comic Sans MS";

header.appendChild(divNav);

let itensNav = ["Home", "Produtos", "Contato"];
// Adcionar itens na Nav
itensNav.forEach(element => {
    let item = document.createElement("a");
    item.innerText = element;
    divNav.appendChild(item);
});
