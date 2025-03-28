// Script para lista de tarefas - DOM

document.body.style.background = "gray";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Arial";
let container = document.querySelector(".container");
container.style.width = "50%"
container.style.backgroundColor = "lightblue";
container.style.margin = "auto";
container.style.padding = "30px";
container.style.borderRadius = "15px";
let tarefa = document.getElementById("tarefa"); // Input
tarefa.style.width = "50%";
tarefa.style.padding = "5px";
tarefa.style.borderRadius = "5px";
let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.style.padding = "8px 10px";
btnEnviar.style.border = "none";
btnEnviar.style.backgroundColor = "green";
btnEnviar.style.color = "aliceblue";
btnEnviar.style.borderRadius = "5px";
btnEnviar.style.cursor = "pointer";
let btnMudarCor = document.getElementById("mudarCor");
btnMudarCor.style.padding = "10px";
btnMudarCor.style.marginBottom = "10px";
btnMudarCor.style.border = "none";
btnMudarCor.style.backgroundColor = mudarCor;
btnMudarCor.style.color = "aliceblue";
btnMudarCor.style.borderRadius = "10px";
btnMudarCor.style.cursor = "pointer";


// Lógica de funcionamento da tarefa

// Criar o ouvinte para a tarefa
btnEnviar.addEventListener(
    "click", criarTarefa
);

function criarTarefa() {
    let texto = tarefa.value.trim(); // Remover espaços em branco
    if (texto === "") {
        return;
    }
    // Se não estiver vazio
    let li = document.createElement("li");
    li.innerHTML = texto+'<button onclick="removeTarefa(this)" class="btnRemove">Remover</button>';
    // Criar o botão
    let ul = document.getElementById("listaTarefas");
    ul.appendChild(li);
    // Apaga o campo do input
    tarefa.value = "";
}

// Function remover
function removeTarefa(botao) {
    botao.parentElement.remove();
}

document.getElementById("mudarCor").addEventListener("click", function() {
    let cores = ["red", "blue", "green", "purple", "orange"];
    document.body.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
});
