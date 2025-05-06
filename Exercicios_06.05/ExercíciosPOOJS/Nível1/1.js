class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, eu me chamo ${this.nome} e tenho ${this.idade} anos`);
    }
}

const pessoa1 = new Pessoa("Marco", 17);
pessoa1.apresentar();