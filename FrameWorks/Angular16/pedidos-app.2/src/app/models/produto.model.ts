export class Produto {
  constructor(
    public id: number,
    public nome: string,
    public preco: number,
    public quantidade: number = 0,
  ) {}
}
